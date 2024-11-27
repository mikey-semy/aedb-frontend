import React from 'react';
import FormAction from '@/components/Common/FormAction/FormAction';

interface FormRemoveManualProps {
  manualId: number;
  onSubmit: (manualId: number) => void;
  onCancel: () => void;
}

const FormRemoveManual: React.FC<FormRemoveManualProps> = ({ manualId, onSubmit, onCancel }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(manualId);
  };

    return (
    
    <form className='form form--manual-remove' onSubmit={handleSubmit}>
      <p className='form__title'>Удалить инструкцию?</p>
      <FormAction 
        onRequestCancel={onCancel} 
        contentCancel={{icon: '', title: 'Отмена'}} 
        contentSubmit={{icon: '', title: 'Удалить'}}
      />
    </form>
    );
};
export default FormRemoveManual;