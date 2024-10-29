import React, { useState } from 'react';
import ModalWrapper from '../../../components/Common/Modal/ModalWrapper';
import Button from '../../../components/Common/Form/Button';
import FormAddManual from '../Forms/FormAddManual';

import { addManual } from '../Manuals/Manual.api';
import { ManualTypes } from '../Manuals/Manual.types'

interface ModalAddManualProps {
  onSuccess: () => void;
}

const ModalAddManual: React.FC<ModalAddManualProps> = ({ onSuccess }) => {
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
  const handleSubmit = async (manual: ManualTypes) => {

    try {
      await addManual(manual);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при добавлении инструкции:', error);
    }
  };
  
  return (
    <>
      <Button
        onClick={openModal} 
        className="button__icon button__icon-add"
      />
      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Добавить инструкцию"
      >
          <FormAddManual 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} />
      </ModalWrapper>
      </>
  );
};

export default ModalAddManual;