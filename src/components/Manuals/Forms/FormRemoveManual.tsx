import React from 'react';

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
    <form className='remove-manual-form' onSubmit={handleSubmit}>
      <button type="button" onClick={onCancel}>Отмена</button>
      <button type="submit">Удалить</button>
    </form>
    );
};
export default FormRemoveManual;