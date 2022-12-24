import axios from "axios";

const GetDoorPassLog = async (code, limit = 10, offset = 0) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/pass/log/door`,
      {
        code: code,
        limit: limit,
        offset: offset,
      },
      {
        withCredentials: true,
      }
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
};

export { GetDoorPassLog };
