import { useEffect } from "react";

type ToastProps = {
  message: string;
  show: boolean;
  setToast: (value: boolean) => void;
};

export function Toast({ message, show, setToast}: ToastProps) {
    
  useEffect(() => {

    const timer = setTimeout(() => {
      setToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [show, setToast]);

  return (
    <div className={`toast ${show ? "toast--visible" : ""}`} role="status">
      {message}
    </div>
  );
}
