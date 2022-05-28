import React, { useEffect, useState } from "react";

export function PopUpChangingStage({
  ticket_type,
  ticket_id,
  isOpen,
  setIsOpen,
  refresh,
}) {
  const [type, setType] = useState(ticket_type);

  useEffect(() => {
    setType(ticket_type);
  }, [ticket_type]);

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
        body: JSON.stringify({ newType: type, id: ticket_id }),
      }
    );

    if (res.status === 201) {
      refresh();
      closePopUp();
    }
  }

  function changeType(e) {
    setType(e.target.value);
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
