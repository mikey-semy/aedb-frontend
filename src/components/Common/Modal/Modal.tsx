import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ModalTypes } from './Modal.types';
import { Overlay, ModalContainer, ModalHeader, ModalBody, ModalFooter, ModalTitle } from './Modal.styles';
import { OpenButton, CloseButton, CancelButton, SubmitButton } from './Buttons';

const MyModal = forwardRef(function MyModal(
  { title, children, onSubmit, renderOpenButton, ...props }: ModalTypes,
  ref
) {
  const [isOpen, setIsModalOpen] = useState(false);
  const [data] = useState({});

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
    },
    close: () => {
      setIsModalOpen(false);
    },
  }));

  const toggleScroll = () => {
    document.body.classList.toggle('no-scroll');
  };

  const onOpen = () => {
    toggleScroll();
    setIsModalOpen(true);
  };

  const onClose = () => {
    toggleScroll();
    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      {renderOpenButton && (
        <OpenButton
          as={props.openButtonStyle}
          iconAs={props.openButtonIconStyle}
          titleAs={props.openButtonTitleStyle}
          onClick={onOpen}
          icon={props.openButtonIcon}
          title={props.openButtonTitle}
        />
      )}
      <Overlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <SubmitButton onClick={handleSubmit} />
          <CancelButton onClick={handleCancel} />
        </ModalFooter>
      </ModalContainer>
    </>
  );
});

export default MyModal;