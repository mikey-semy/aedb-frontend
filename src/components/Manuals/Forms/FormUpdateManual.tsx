import React, { useState, useEffect } from 'react';
import getGroups from '../../../api/Groups/getGroups';
import FormAction from '../../Form/Action';
import { Manual } from '../../../types/types';
interface Group {
  id: number;
  name: string;
}

interface FormUpdateManualProps {
  initialValues: Manual;
  onSubmit: (manual: Manual) => void;
  onCancel: () => void;
}

const FormUpdateManual: React.FC<FormUpdateManualProps> = ({ initialValues, onSubmit, onCancel }) => {
  
  const [manual, setManual] = useState<Manual>(initialValues);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const fetchedGroups = await getGroups();
      setGroups(fetchedGroups);
    };
    fetchGroups();
  }, []);

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
      <select
        name="group_id"
        value={groups.find(group => group.id === manual.group_id) ? manual.group_id : ''}
        onChange={handleChange}
        required
      >
        <option value="">Выберите группу</option>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>
      <FormAction 
        onRequestCancel={onCancel} 
        contentCancel={{icon: '', title: 'Отмена'}} 
        contentSubmit={{icon: '', title: 'Обновить'}}
      />
    </form>
  );
};

export default FormUpdateManual;
