import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormAddManual from '../Forms/FormAddManual';

interface ModalAddManualProps {
  onSuccess: () => void; // Колбэк для успешного выполнения действия
}

const ModalAddManual: React.FC<ModalAddManualProps> = ({ onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async () => {
    // Здесь вы можете выполнить действие, например, отправить данные на сервер
    // После успешного выполнения действия:
    // await someAsyncFunction(data); // Замените на вашу функцию

    // Закрыть модальное окно
    closeModal();

    // Вызвать колбэк для обновления элемента
    onSuccess();
  };
  
  return (
    <div className='manual__toolbar'>
      <button className="button--text" onClick={openModal}>
        Добавить
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Добавить инструкцию"
      >
          <FormAddManual onSubmit={handleFormSubmit}/>
      </ModalWrapper>
    </div>
  );
};

export default ModalAddManual;