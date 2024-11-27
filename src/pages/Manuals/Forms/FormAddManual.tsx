import React, { useEffect, useState } from 'react';

import FormAction from '@/components/Common/FormAction/FormAction';
import SelectCategory from './Selects/SelectCategory';
import SelectGroup from './Selects/SelectGroup';

import { getCategories } from '@/pages/Manuals/Categories/Category.api';
import { getGroupsByCategory } from '@/pages/Manuals/Groups/Group.api';

import { ManualTypes } from '@/pages/Manuals/Manuals/Manual.types';
import { GroupTypes } from '@/pages/Manuals/Groups/Group.types';
import { CategoryTypes } from '@/pages/Manuals/Categories/Category.types';

interface FormAddManualProps {
  onSubmit: (manual: ManualTypes) => void;
  onCancel: () => void;
}

const FormAddManual: React.FC<FormAddManualProps> = ({ onSubmit, onCancel }) => {
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [groups, setGroups] = useState<GroupTypes[]>([])
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [manual, setManual] = useState({
        id: 0,
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
    if (selectedGroup && selectedCategory) {
      setError(null);
      onSubmit({
        id: manual.id,
        title: manual.title,
        file_url: manual.file_url,
        group_id: selectedGroup,
        category_id: selectedCategory
      });
    } else {
      // Обработка ошибки: группа или категория не выбраны
      setError('Пожалуйста, выберите категорию и группу');
    }
  }

  useEffect(() => {
    if (selectedCategory && selectedGroup) {
      setError(null);
    }
  }, [selectedCategory, selectedGroup]);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(error => setError(`Ошибка при загрузке категорий: ${error.message}`));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getGroupsByCategory(selectedCategory)
        .then(setGroups)
        .catch(error => setError(`Ошибка при загрузке групп: ${error.message}`));
    } else {
      setGroups([]);
    }
    setSelectedGroup(0);
  }, [selectedCategory]);

  return (
    <form className='form form--manual-add' onSubmit={handleSubmit}>

      <SelectCategory
        categories={categories}
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
      />
      <SelectGroup
        groups={groups}
        value={selectedGroup}
        onChange={(value) => setSelectedGroup(value)}
      />

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
      
      <FormAction 
        onRequestCancel={onCancel} 
        contentCancel={{icon: '', title: 'Отмена'}} 
        contentSubmit={{icon: '', title: 'Добавить'}}
        disabled={!!error}
      />

      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
export default FormAddManual;