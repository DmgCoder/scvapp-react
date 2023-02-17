import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createAlert, setAlert } from "../../../../features/alert/alertSlice";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";
import { selectTheme } from "../../../../features/theme/themeSlice";
import CreateDoorPopUp from "../../components/createDoorPopUp/createDoorPopUp";
import {
  DeleteDoorPass,
  OpenDoor,
  ReganerateDoorPassAccessSecret,
  ReganerateDoorPassCode
} from "../adminDoorPassAPI";

//Import style
import "./show.css";

//Import components
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ActivityLogDoorPass from "../../components/activityLogDoorPass/activityLogDoorPass";
import AdminBackBtn from "../../components/adminBackBtn";
import ShowTitle from "../../components/showTitle/showTitle";

const Show = () => {
  const theme = useSelector(selectTheme);
  const { name_id } = useParams();
  const [doorPass, setDoorPass] = React.useState(null);
  const { doorPasses, refresh } = useDoorPasses();
  const [newDoorSecret, setNewDoorSecret] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenDoor = async () => {
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite odpreti vrata?"
    );
    if (!confirmation || !doorPass?.code) return;
    const data = await OpenDoor(doorPass.code);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Vrata so bila odprta",
        successStatusCode: 200,
      })
    );
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
    dispatch(
      setAlert({
        type: "success",
        title: "Uspešno",
        message: "Koda je bila uspešno kopirana",
        show: true,
      })
    );
  };

  const handleDelete = async () => {
    if (!doorPass) return;
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite izbrisati to učilnico?"
    );
    if (!confirmation) return;
    const data = await DeleteDoorPass(doorPass.code);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Učilnica je bila uspešno izbrisana",
        successStatusCode: 200,
      })
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
    const data = await ReganerateDoorPassCode(doorPass.code);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Koda je bila uspešno generirana",
        successStatusCode: 200,
      })
    );
    refresh();
  };

  const handleGenerateNewSecret = async () => {
    if (!doorPass) return;
    const confirmation = window.confirm(
      "Ali ste prepričani, da želite generirati novo skrivnost?"
    );
    if (!confirmation) return;
    const data = await ReganerateDoorPassAccessSecret(doorPass.code);
    if (data.status === 200) {
      setNewDoorSecret(data.data.access_secret);
    }
    dispatch(
      createAlert({
        data: data,
        successMessage: "Skrivnost je bila uspešno generirana",
        successStatusCode: 200,
      })
    );
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
