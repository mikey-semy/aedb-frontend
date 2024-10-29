import React, { useState } from 'react';
import ModalWrapper from '../../../components/Common/Modal/ModalWrapper';
import Button from '../../../components/Common/Form/Button';
import FormRemoveManual from '../Forms/FormRemoveManual';
import { removeManual } from '../Manuals/Manual.api';

interface ModalRemoveManualProps {
  manualId: number;
  onSuccess: () => void;
}

const ModalRemoveManual: React.FC<ModalRemoveManualProps> = ({ manualId, onSuccess }) => {
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

  const handleSubmit = async (manualId: number) => {
    try {
      console.log(manualId)
      await removeManual(manualId)
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при удалении инструкции:', error);
    }
};
  return (
<>
      <Button 
        onClick={openModal} 
        className="button__icon button__icon-remove"
      />
      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Вы уверены?"
      >
        <FormRemoveManual
          manualId={manualId}
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
        />
      </ModalWrapper>
    </>
  );
};

export default ModalRemoveManual;