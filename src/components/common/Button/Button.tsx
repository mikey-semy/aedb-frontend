import React from 'react';
import { ButtonProps } from './Button.props';
import { ButtonContainer, ButtonIcon, ButtonTitle } from './Button.styles';
const Button: React.FC<ButtonProps> = ({ 
    type = "button", 
    onClick, 
    icon: Icon, 
    title, 
    disabled = false
  }) => {
  return (
    <ButtonContainer 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
    >
        <ButtonIcon>
          {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)}
        </ButtonIcon>
        <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default Button;