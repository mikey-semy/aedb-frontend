import React from 'react';
import { ButtonTypes } from './Button.types';
import { ButtonContainer, ButtonIcon, ButtonTitle } from './Button.styles';
const Button: React.FC<ButtonTypes> = ({ 
    type = "button", 
    onClick, 
    icon: Icon, 
    title, 
    disabled = false,
    as,
    iconAs,
    titleAs,
  }) => {
  return (
    <ButtonContainer
      as={as}
      type={type} 
      onClick={onClick} 
      disabled={disabled}
    >
      <ButtonIcon as={iconAs}>
        {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)}
      </ButtonIcon>
      <ButtonTitle as={titleAs}>
        {title}
      </ButtonTitle>
    </ButtonContainer>
  );
};

export default Button;