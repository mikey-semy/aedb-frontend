import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormUpdateManual from '../Forms/FormUpdateManual';

const ModalUpdateManual: React.FC = () => {
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
        Обновить
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Обновить инструкцию"
      >
        <FormUpdateManual />
      </ModalWrapper>
    </div>
  );
};

export default ModalUpdateManual;
