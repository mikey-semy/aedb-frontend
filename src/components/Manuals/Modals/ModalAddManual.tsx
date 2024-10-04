import React, { useState } from 'react';
import Modal from 'react-modal';
import FormAddManual from '../Forms/FormAddManual'; // Импортируйте ваш компонент

// Установите элемент приложения для модального окна
Modal.setAppElement('#root');

const ModalAddManual: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='manual__toolbar'>
      <button className="button--text" onClick={openModal}>
        Добавить
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Добавить инструкцию"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className='modal__content'>
          <div className='modal__header'>
            <h2 className='modal__title'>Добавить инструкцию</h2>
          </div>
          <FormAddManual />
          <button className="button--icon modal__close" onClick={closeModal}>✖</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddManual;