import { IconType } from 'react-icons';

export interface ModalTypes {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    openButtonTitle?: string;
    openButtonIcon?: IconType;
    openButtonStyle?: React.ComponentType;
    openButtonIconStyle?: React.ComponentType;
    openButtonTitleStyle?: React.ComponentType;
    children: React.ReactNode;
    appendTo?: HTMLElement; // корневой элемент, к которому будет присоединено модальное окно
    onSubmit: (data: any) => void; // функция, которая будет вызываться при submit
}