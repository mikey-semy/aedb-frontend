import { ToastTypes } from "@/components/Common/Toast";

export interface ToastContextTypes {
    addToast: (toast: Omit<ToastTypes, 'id'>) => void;
}