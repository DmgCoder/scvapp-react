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

export { GetAllDoorPasses };
