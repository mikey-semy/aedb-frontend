import { IconType } from 'react-icons';

export interface ButtonTypes {
    type?: "submit" | "reset" | "button";
    onClick?: ((event: 
        React.FormEvent<HTMLFormElement> | 
        React.MouseEvent<HTMLButtonElement>) => void) | 
        void;
    icon?: IconType;
    title?: string;
    disabled?: boolean;
    as?: React.ComponentType;
    iconAs?: React.ComponentType;
    titleAs?: React.ComponentType;
}