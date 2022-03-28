import { toast } from "react-toastify";

export default {
  succes: (text) => {
    toast.success(text, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};
