import axios from "axios";

const changeUserStatus = async (status) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/setStatus/${status}`,
      {
        withCredentials: true,
      }
    );
    return { data: response.data, status: response.status };
  } catch (e) {
    return e.response;
  }
};

export { changeUserStatus };
