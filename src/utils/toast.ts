import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
  });
