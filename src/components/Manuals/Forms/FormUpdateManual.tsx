import React, { useState } from 'react';
import FormAction from '../../Form/Action';
import SelectGroup from '../../Form/SelectGroup';
import { Manual } from '../../../types/manual';


interface FormUpdateManualProps {
  initialValues: Manual;
  onSubmit: (manual: Manual) => void;
  onCancel: () => void;
}

const FormUpdateManual: React.FC<FormUpdateManualProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [error, setError] = useState<string | null>(null);
  const [manual, setManual] = useState<Manual>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setManual(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(manual);
  };

  return (
    <form className='form form--manual-update' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={manual.title}
        onChange={handleChange}
        placeholder="Название инструкции"
        required
      />
      <input
        type="url"
        name="file_url"
        value={manual.file_url}
        onChange={handleChange}
        placeholder="URL файла инструкции"
        required
      />

      <SelectGroup manual={manual} handleChange={handleChange} onError={setError}/>

      <FormAction 
        onRequestCancel={onCancel} 
        contentCancel={{icon: '', title: 'Отмена'}} 
        contentSubmit={{icon: '', title: 'Обновить'}}
        disabled={!!error}
      />
    </form>
  );
};

export default FormUpdateManual;
