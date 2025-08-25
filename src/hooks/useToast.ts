import { toast, Slide } from "react-toastify";
import type { ToastOptions, ToastContent } from "react-toastify";

type ToastType = "success" | "error" | "warning" | "info" | "default";

type ToastFunctions = {
  success: typeof toast.success;
  error: typeof toast.error;
  warning: typeof toast.warn;
  info: typeof toast.info;
  default: typeof toast;
};

export const useToast = () => {
  const toastPreferences: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    transition: Slide,
    hideProgressBar: true,
    closeButton: true,
    style: { color: "#000000" },
  };

  const toastTypes: ToastFunctions = {
    success: toast.success,
    error: toast.error,
    warning: toast.warn,
    info: toast.info,
    default: toast,
  };

  const notify = (
    type: ToastType = "default",
    message: ToastContent,
    customConfig: ToastOptions = {}
  ) => {
    const toastFunc = toastTypes[type] || toastTypes.default;

    toastFunc(message, {
      ...toastPreferences,
      ...customConfig,
    });
  };

  return { notify };
};

export default useToast;
