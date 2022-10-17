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

export { GetScheduleData };
