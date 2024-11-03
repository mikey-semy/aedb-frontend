import { IconType } from 'react-icons';

export interface ButtonTypes {
    type?: "submit" | "reset" | "button";
    onClick?: ((event: 
        React.FormEvent<HTMLFormElement> | 
        React.MouseEvent<HTMLButtonElement>) => void) | 
        void;
    icon?: IconType | React.ReactNode;
    title?: string | React.ReactNode;
    disabled?: boolean;
    as?: React.ComponentType | React.ReactNode;
    iconAs?: React.ComponentType;
    titleAs?: React.ComponentType;
}