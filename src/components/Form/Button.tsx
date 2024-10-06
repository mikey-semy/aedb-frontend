import React from 'react';

interface ButtonProps {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    icon?: React.ReactNode | string;
    title?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    type = "button", 
    onClick, 
    icon="", 
    title="", 
    className 
  }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
        <span className='button__icon'>{icon}</span>
        <span className='button__title'>{title}</span>
    </button>
  );
};

export default Button;