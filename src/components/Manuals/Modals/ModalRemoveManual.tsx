import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormRemoveManual from '../Forms/FormRemoveManual';


const ModalRemoveManual: React.FC = () => {
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
        Удалить
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Вы уверены?"
      >
          <FormRemoveManual />
      </ModalWrapper>
    </div>
  );
};

export default ModalRemoveManual;