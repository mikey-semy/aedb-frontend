import React, { useState } from 'react';
import FormAction from '../../Form/Action';
import SelectGroup from '../../Form/SelectGroup';

interface FormAddManualProps {
  onSubmit: (manual: { title: string; file_url: string; group_id: number }) => void;
  onCancel: () => void;
}
const FormAddManual: React.FC<FormAddManualProps> = ({ onSubmit, onCancel }) => {
  const [error, setError] = useState<string | null>(null);
  const [manual, setManual] = useState({
        title: '',
        file_url: '',
        group_id: 0 
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setManual(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(manual);
    };

    return (
    <form className='form form--manual-add' onSubmit={handleSubmit}>
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
        contentSubmit={{icon: '', title: 'Добавить'}}
        disabled={!!error}
      />
    </form>
    );
};
export default FormAddManual;