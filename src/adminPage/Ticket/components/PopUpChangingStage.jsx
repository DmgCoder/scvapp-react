import React, { useEffect, useState } from "react";

export function PopUpChangingStage({
  ticket_type,
  ticket_id,
  isOpen,
  setIsOpen,
  refresh,
}) {
  const [type, setType] = useState(ticket_type);
  const [canForwardToUsers, setCanForwardToUsers] = useState([]);
  const [forwardUserId, setForwardUserId] = useState(0);

  useEffect(() => {
    setType(ticket_type);
  }, [ticket_type]);

  useEffect(() => {
    setType(ticket_type);
  }, [isOpen]);

  function closePopUp() {
    setIsOpen(false);
  }

  async function saveChanges() {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/ticket/changeType`,
      {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newType: type,
          id: ticket_id,
          forward_admin_user_id: forwardUserId,
        }),
      }
    );

    if (res.status === 201) {
      refresh();
      closePopUp();
    }
  }

  async function getCanForwardToUsers() {
    if (canForwardToUsers.length === 0) {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/admin/ticket/canForwardToUsers/${ticket_id}`,
        {
          mode: "cors",
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        let data = await res.json();
        setCanForwardToUsers(data);
        if(data.length > 0){
          setForwardUserId(data[0].id);
        }
      }
    }
  }

  async function changeType(e) {
    setType(e.target.value);
    if (e.target.value === "posredovano") {
      await getCanForwardToUsers();
    }
  }

  async function selectForwardToUser(e) {
    setForwardUserId(e.target.value);
  }

  return (
    <div
      className="ticket-popup-changing-stage"
      style={{ display: isOpen ? "flex" : "" }}
    >
      <div className="ticket-popup-changing-stage-content">
        <div className="ticket-popup-changing-stage-content-title">
          <p>Spremi status za ID: {ticket_id}</p>
        </div>
        <select value={type} onChange={changeType}>
          <option value="odprto">Odprto</option>
          <option value="zaprto">Zaprto</option>
          <option value="posredovano">Posredovano</option>
          <option value="odgovorjeno">Odgovorjeno</option>
        </select>
        {type === "posredovano" && (
          <select onChange={selectForwardToUser}>
            {canForwardToUsers.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.displayName}
                </option>
              );
            })}
          </select>
        )}
        <div className="ticket-popup-changing-stage-content-buttons">
          <button id="save" onClick={saveChanges}>
            Shrani
          </button>
          <button id="discard" onClick={closePopUp}>
            Prekliči
          </button>
        </div>
      </div>
    </div>
  );
}
