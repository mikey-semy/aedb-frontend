import ReactDOM from 'react-dom';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { ModalTypes } from './Modal.types';
import { Overlay, ModalContainer, ModalHeader, ModalBody, ModalTitle } from './Modal.styles';
import { OpenButton, CloseButton } from './Buttons';

const Modal = forwardRef(function MyModal(
  { title, children, onSubmit, renderOpenButton, appendTo, ...props }: ModalTypes,
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

  const portalContainer = appendTo || document.body;

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
      {isOpen && ReactDOM.createPortal(<>
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
    </>, portalContainer
  )} </>
  );
});

export default Modal;