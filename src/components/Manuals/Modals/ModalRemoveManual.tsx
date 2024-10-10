import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import Button from '../../Form/Button';
import FormRemoveManual from '../Forms/FormRemoveManual';
import { removeManual } from '../../../api';

interface ModalRemoveManualProps {
  manualId: number;
  onSuccess: () => void;
}
/*************  ✨ Codeium Command ⭐  *************/
/**
 * A modal window for removing a manual
 * @function ModalRemoveManual
 * @param {number} manualId - The id of the manual to remove
 * @param {() => void} onSuccess - The callback to call when the manual is removed
 * @returns {ReactElement} The modal window
 */
/******  093843f4-00e9-4a90-8d03-c2074acc7e28  *******/
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