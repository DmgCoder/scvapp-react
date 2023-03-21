import { toast } from "react-toastify";

const useAlert = () => {
  const createAlert = async (promiseFunction, successMessage) => {
    const response = await toast.promise(promiseFunction, {
      pending: "Loading...",
      success: successMessage,
      error: (err) => {
        return err.message;
      },
    });

    return response;
  };

  const setAlert = (message, type) => {
    toast[type](message);
  };

  return { createAlert, setAlert };
};

export default useAlert;
