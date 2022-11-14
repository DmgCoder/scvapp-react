import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { selectTheme } from "../../../../features/theme/themeSlice";
import { createAlert, setAlert } from "../../../../features/alert/alertSlice";
import { DeleteDoorPass, OpenDoor } from "../adminDoorPassAPI";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";

//Import style
import "./show.css";

//Import components
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ActivityLogDoorPass from "../../components/activityLogDoorPass/activityLogDoorPass";
import AdminBackBtn from "../../components/adminBackBtn";

const Show = () => {
  const theme = useSelector(selectTheme);
  const { name_id } = useParams();
  const [doorPass, setDoorPass] = React.useState(null);
  const { doorPasses, refresh } = useDoorPasses();
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

  React.useEffect(handleLoad, [doorPasses]);

  return (
    <div className={`admin-door-pass-show ${theme}`}>
      <div className="admin-door-pass-show-content">
        <AdminBackBtn to={"/admin/door-pass"} />
        <div id="right-side">
          <div className="admin-door-pass-show-content-header">
            <MeetingRoomOutlinedIcon />
            <p>{doorPass?.name_id}</p>
          </div>
          <button onClick={handleCopyCode}>Kopiraj kodo vrat</button>
          <button onClick={handleOpenDoor}>Oddaljeno odpri vrata</button>
          <button>Ponastavi kodo vrat</button>
          <button onClick={handleDelete}>Izbriši vrata</button>
          <button>Ponastavi skrivnost vrat</button>
        </div>
        <div id="left-side">
          <p>Activity log:</p>
          <ActivityLogDoorPass />
        </div>
      </div>
    </div>
  );
};

export default Show;
