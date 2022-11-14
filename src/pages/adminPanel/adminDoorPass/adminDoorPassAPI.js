import axios from "axios";

const GetAllDoorPasses = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/pass/all_doors`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const CreateDoorPass = async (name_id, minimum_allways_access_level) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/pass/create_door`,
      {
        name_id,
        minimum_allways_access_level,
      },
      {
        withCredentials: true,
      }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response;
  }
};

const OpenDoor = async (code) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/pass/open_door/${code}`,
      {
        withCredentials: true,
      }
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    return error.response;
  }
};

const DeleteDoorPass = async (code) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/pass/delete_door/${code}`,
      {
        withCredentials: true,
      }
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    return error.response;
  }
};

export { GetAllDoorPasses, CreateDoorPass, OpenDoor, DeleteDoorPass };
