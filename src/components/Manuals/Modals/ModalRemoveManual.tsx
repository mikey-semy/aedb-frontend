import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormRemoveManual from '../Forms/FormRemoveManual';
import removeManual from '../../../api/Manuals/removeManual';
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

  const handleSubmit = async () => {
    try {
      await removeManual(manualId)
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при добавлении инструкции:', error);
    }
};
  

  return (
<>
      <button type="button" className="button__delete button--icon" onClick={openModal}>
        {/* Удалить */}
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Вы уверены?"
      >
          <FormRemoveManual onSubmit={handleSubmit} onCancel={handleCancel}/>
      </ModalWrapper>
    </>
  );
};

export default ModalRemoveManual;