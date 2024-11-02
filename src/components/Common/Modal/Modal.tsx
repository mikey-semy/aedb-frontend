import React from 'react';
import { ModalTypes } from './Modal.types';
import { Overlay, ModalContainer, ModalHeader, ModalTitle } from './Modal.styles';


const Modal: React.FC<ModalTypes> = ({ 
  
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  return (
    <>
    <Overlay isOpen={!isOpen} onClick={onClose}/>
    <ModalContainer
      isOpen={isOpen}
    >
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>

        </ModalHeader>
        {children}
        
    </ModalContainer>
    </>
    
  );
  
};

export default Modal;
