import { IconType } from 'react-icons';

export interface ButtonProps {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    icon?: IconType;
    title?: string;
    disabled?: boolean;
}