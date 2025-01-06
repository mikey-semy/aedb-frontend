export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastTypes {
    id: string;
    type: ToastType;
    title?: string;
    message: string;
    duration?: number;
}