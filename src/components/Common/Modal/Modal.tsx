import React, { useState } from 'react';
import { ModalTypes } from './Modal.types';
import { Overlay, ModalContainer, ModalHeader, ModalBody, ModalFooter, ModalTitle } from './Modal.styles';
import { OpenButton, CloseButton, CancelButton, SubmitButton } from './Buttons';

const Modal: React.FC<ModalTypes> = ({   
  title, 
  children,
  openButtonTitle,
  openButtonIcon,
  openButtonStyle,
  openButtonIconStyle,
  openButtonTitleStyle,
  onSubmit,
}) => {
  const [isOpen, setIsModalOpen] = useState(false);
  const [data] = useState({});

  const toggleScroll = () => {
    document.body.classList.toggle('no-scroll');
  };
  
  const onOpen = () => {
    toggleScroll();
    setIsModalOpen(true);
  }

  const onClose = () => {
    toggleScroll();
    setIsModalOpen(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(data); // вызов функции onSubmit с данными
  };

  const handleCancel = () => {
    onClose();
  }

  return (
    <>
      <OpenButton
        as={openButtonStyle} 
        iconAs={openButtonIconStyle} 
        titleAs={openButtonTitleStyle} 
        onClick={onOpen}
        icon={openButtonIcon}
        title={openButtonTitle}
      />
      <Overlay isOpen={isOpen} onClick={onClose}/>
      <ModalContainer
        isOpen={isOpen}
      >
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <SubmitButton onClick={handleSubmit}/>
          <CancelButton onClick={handleCancel} />
        </ModalFooter>
      </ModalContainer>
    </>
  );
};

export default Modal;
