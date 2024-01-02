import { toast } from 'react-toastify';

export const notify = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
