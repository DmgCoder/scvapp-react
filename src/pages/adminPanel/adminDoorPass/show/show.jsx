import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";
import { selectTheme } from "../../../../features/theme/themeSlice";
import CreateDoorPopUp from "../../components/createDoorPopUp/createDoorPopUp";
import {
  DeleteDoorPass,
  OpenDoor,
  ReganerateDoorPassAccessSecret,
  ReganerateDoorPassCode,
} from "../adminDoorPassAPI";

//Import style
import "./show.css";

//Import components
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ActivityLogDoorPass from "../../components/activityLogDoorPass/activityLogDoorPass";
import AdminBackBtn from "../../components/adminBackBtn";
import ShowTitle from "../../components/showTitle/showTitle";
import useAlert from "../../../../features/alert/useAlert";

const Show = () => {
  const theme = useSelector(selectTheme);
  const { name_id } = useParams();
  const [doorPass, setDoorPass] = React.useState(null);
  const { doorPasses, refresh } = useDoorPasses();
  const [newDoorSecret, setNewDoorSecret] = React.useState(null);
  const navigate = useNavigate();
  const { createAlert, setAlert } = useAlert();

  const handleOpenDoor = async () => {
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite odpreti vrata?"
    );
    if (!confirmation || !doorPass?.code) return;
    await createAlert(OpenDoor(doorPass.code), "Vrata so bila odprta");
  };

  const handleLoad = () => {
    if (doorPasses) {
      const doorPass = doorPasses.find(
        (doorPass) => doorPass.name_id === name_id
      );
      setDoorPass(doorPass);
    }
  };

  const handleCopyCode = () => {
    if (!doorPass) return;
    navigator.clipboard.writeText(doorPass?.code);
    setAlert("Koda je bila uspešno kopirana", "success");
  };

  const handleDelete = async () => {
    if (!doorPass) return;
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite izbrisati to učilnico?"
    );
    if (!confirmation) return;
    await createAlert(
      DeleteDoorPass(doorPass.code),
      "Učilnica je bila uspešno izbrisana"
    );
    refresh();
    navigate("/admin/door-pass");
  };

  const handleGenerateNewCode = async () => {
    if (!doorPass) return;
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite generirati novo kodo?"
    );
    if (!confirmation) return;
    await createAlert(
      ReganerateDoorPassCode(doorPass.code),
      "Koda je bila uspešno generirana"
    );
    refresh();
  };

  const handleGenerateNewSecret = async () => {
    if (!doorPass) return;
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite generirati novo skrivnost?"
    );
    if (!confirmation) return;
    const data = await createAlert(
      ReganerateDoorPassAccessSecret(doorPass.code),
      "Skrivnost je bila uspešno generirana"
    );
    if (data.status === 200) {
      setNewDoorSecret(data.data.access_secret);
    }
    refresh();
  };

  React.useEffect(handleLoad, [doorPasses]);

  return (
    <div className={`admin-door-pass-show ${theme}`}>
      <CreateDoorPopUp
        code={newDoorSecret}
        setCode={setNewDoorSecret}
        close={() => {}}
      />
      <div className="admin-door-pass-show-content">
        <AdminBackBtn to={"/admin/door-pass"} />
        <div id="right-side">
          <div className="admin-door-pass-show-content-header">
            <MeetingRoomOutlinedIcon />
            <ShowTitle doorPass={doorPass} />
          </div>
          <button onClick={handleCopyCode}>Kopiraj kodo vrat</button>
          <button onClick={handleOpenDoor}>Oddaljeno odpri vrata</button>
          <button onClick={handleGenerateNewCode}>Ponastavi kodo vrat</button>
          <button onClick={handleDelete}>Izbriši vrata</button>
          <button onClick={handleGenerateNewSecret}>
            Ponastavi skrivnost vrat
          </button>
        </div>
        <div id="left-side">
          <p>Activity log:</p>
          <ActivityLogDoorPass doorPass={doorPass} />
        </div>
      </div>
    </div>
  );
};

export default Show;
