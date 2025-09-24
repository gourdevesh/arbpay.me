import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-center",
  autoClose: 3000,
  style: { marginTop: "32px" },
};

export const showSuccess = (message) => {
  toast.success(message, defaultOptions);
};

export const showError = (message) => {
  toast.error(message, defaultOptions);
};
