import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="modal"
      overlayClassName="modal__overlay"
    >
      <div className='modal__content'>
        <div className='modal__header'>
          <h2 className='modal__title'>{title}</h2>
        </div>
        {children}
        <button className="button--icon modal__close" onClick={onRequestClose}>✖</button>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
