import { toast } from "react-toastify"

export const notify = (mesg,type) => {
    toast[type](mesg)
  };