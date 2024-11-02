import { IconType } from 'react-icons';

export interface ButtonTypes {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    icon?: IconType;
    title?: string;
    disabled?: boolean;
    as?: React.ComponentType;
    iconAs?: React.ComponentType;
    titleAs?: React.ComponentType;
}