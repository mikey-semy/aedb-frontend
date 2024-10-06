import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import Button from '../../Form/Button';
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
      <Button 
        onClick={openModal} 
        className="button__icon button__icon-update"
      />
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
