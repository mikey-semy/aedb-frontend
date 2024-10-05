import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import FormAddManual from '../Forms/FormAddManual';
import addManual from '../../../api/Manuals/addManual';
interface Manual {
  id?: number;
  title: string;
  file_url: string;
  group_id: number;   
}
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
  const handleSubmit = async (manual: Manual) => {

    try {
      await addManual(manual);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при добавлении инструкции:', error);
    }
  };
  
  return (
    <div className='manual__toolbar'>
      <button type="button" className="button--text" onClick={openModal}>
        Добавить
      </button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Добавить инструкцию"
      >
          <FormAddManual onSubmit={handleSubmit} onCancel={handleCancel} />
      </ModalWrapper>
    </div>
  );
};

export default ModalAddManual;