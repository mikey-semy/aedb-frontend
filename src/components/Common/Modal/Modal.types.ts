export interface ModalTypes {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}