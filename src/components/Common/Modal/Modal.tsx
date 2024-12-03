import { useState, forwardRef, useImperativeHandle } from 'react';
import { ModalTypes } from './Modal.types';
import { Overlay, ModalContainer, ModalHeader, ModalBody, ModalTitle } from './Modal.styles';
import { OpenButton, CloseButton } from './Buttons';

const Modal = forwardRef(function MyModal(
  { title, children, onSubmit, renderOpenButton, ...props }: ModalTypes,
  ref
) {
  const [isOpen, setIsModalOpen] = useState(false);

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
      </ModalContainer>
    </>
  );
});

export default Modal;