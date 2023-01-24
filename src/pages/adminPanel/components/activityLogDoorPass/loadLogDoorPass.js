import axios from "axios";

const GetDoorPassLog = async (code, offset = 0, limit = 10) => {
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

const GetDoorPassLogLength = async (code) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/pass/log/door/count`,
      {
        code: code,
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

export { GetDoorPassLog, GetDoorPassLogLength };
