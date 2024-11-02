import React, { useState } from 'react';
import ModalWrapper from '../../../components/Common/Modal/Modal';
import Button from '../../../components/Common/Form/Button';
import FormUpdateManual from '../Forms/FormUpdateManual';
import { updateManual } from '../Manuals/Manual.api';
import { CategoryTypes } from '../Categories/Category.types';
import { ManualTypes } from '../Manuals/Manual.types';

interface ModalUpdateManualProps {
  manual: ManualTypes;
  category: CategoryTypes;
  onSuccess: () => void;
}

const ModalUpdateManual: React.FC<ModalUpdateManualProps> = ({ category, manual, onSuccess }) => {
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

  const handleSubmit = async (updatedManual: ManualTypes) => {
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
          initialValuesCategory={category}
          initialValuesManual={manual}
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
        />
      </ModalWrapper>
    </>
  );
};

export default ModalUpdateManual;
