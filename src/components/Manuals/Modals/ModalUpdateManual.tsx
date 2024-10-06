import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormUpdateManual from '../Forms/FormUpdateManual';
import updateManual from '../../../api/Manuals/updateManual';
import { Manual } from '../../../types/types';

interface ModalUpdateManualProps {
  manual: Manual;
  onSuccess: () => void;
}

const ModalUpdateManual: React.FC<ModalUpdateManualProps> = ({ manual, onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmit = async (updatedManual: Manual) => {
    try {
      await updateManual(updatedManual);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при обновлении инструкции:', error);
      // Здесь можно добавить уведомление для пользователя
    }
  };
  
  return (
    <>
      <button type="button" className="button__update button--icon" onClick={openModal}>
        {/* Обновить */}
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Обновить инструкцию"
      >
        <FormUpdateManual 
          initialValues={manual}
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
        />
      </ModalWrapper>
    </>
  );
};

export default ModalUpdateManual;
