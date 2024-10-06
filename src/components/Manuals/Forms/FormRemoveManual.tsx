import React from 'react';
import FormAction from '../../Form/Action';
interface FormRemoveManualProps {
  onSubmit: () => void;
  onCancel: () => void;
}
const FormRemoveManual: React.FC<FormRemoveManualProps> = ({ onSubmit, onCancel }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

    return (
    <form className='form form--manual-remove' onSubmit={handleSubmit}>
      <FormAction onRequestCancel={onCancel} contentCancel='Отмена' contentSubmit='Удалить'/>
    </form>
    );
};
export default FormRemoveManual;