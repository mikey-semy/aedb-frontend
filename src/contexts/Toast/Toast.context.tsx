import { createContext, useContext, useState } from 'react';
import { ToastContextTypes } from './Toast.types';
import { ToastTypes, ToastWrapper, Toast } from '@/components/Common/Toast';

const ToastContext = createContext<ToastContextTypes>({} as ToastContextTypes);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [toasts, setToasts] = useState<ToastTypes[]>([]);

    const addToast = (toast: Omit<ToastTypes, 'id'>) => {
        const id = Math.random().toString(36);
        setToasts(prev => [...prev, { ...toast, id }]);
    };

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{addToast}}>
            {children}
            <ToastWrapper>
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </ToastWrapper>
        </ToastContext.Provider>
    );
};
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}