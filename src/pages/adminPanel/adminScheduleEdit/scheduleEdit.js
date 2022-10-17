import axios from "axios";

const GetScheduleData = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const ChangeScheduleURL = async (schoolID, url) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolID}`,
      {
        uniLink: url,
      },
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export { GetScheduleData, ChangeScheduleURL };
