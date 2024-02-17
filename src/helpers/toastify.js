import { toast } from "react-toastify";
const notify = (type, message) => {
  if (type === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};

export default notify;
