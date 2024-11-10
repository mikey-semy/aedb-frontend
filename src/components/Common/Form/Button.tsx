import React from 'react';

interface ButtonProps {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    icon?: React.ReactNode | string;
    title?: string;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    type = "button", 
    onClick, 
    icon="", 
    title="", 
    className,
    disabled = false
  }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
        <span className='button__icon'>{icon}</span>
        <span className='button__title'>{title}</span>
    </button>
  );
};

export default Button;