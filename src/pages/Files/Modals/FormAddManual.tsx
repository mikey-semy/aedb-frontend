import React, { useState, useEffect } from 'react';
import Modal from '@/components/Common/Modal/Modal';
import { Input, Select } from '@/components';
import { getCategories } from '@/pages/Manuals/Categories/Category.api';
import { getGroupsByCategory } from '@/pages/Manuals/Groups/Group.api';
import { GroupTypes } from '@/pages/Manuals/Groups/Group.types';
import { CategoryTypes } from '@/pages/Manuals/Categories/Category.types';
import { SubmitButton, CancelButton } from '@/components/Common/Modal/Buttons';


const FormAddManual = React.forwardRef(function FormAddManual({}, ref) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [groups, setGroups] = useState<GroupTypes[]>([])
  const [error, setError] = useState<string | null>(null);
  const optionsCategories = categories.map(cat => ({ value: cat.id?.toString() ?? '', label: cat.name }))
  const optionsGroup = groups.map(group => ({ value: group.id?.toString() ?? '', label: group.name }));
  
  const [manual, setManual] = useState({
    id: 0,
    title: '',
    file: null as File | null,
    group_id: 0,
    category_id: 0,
  })

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setManual(prev => ({ ...prev, file: e.target.files![0] }));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setManual(prev => ({ ...prev, [name]: value }));
  }

  const handleSelectCategoryChange = (selectedValue: number | null) => {
    if (selectedValue === null) {
      setError('Пожалуйста, выберите категорию');
      setSelectedCategory(null);
    } else {
      setError(null);
      setSelectedCategory(selectedValue);
    }
  }
  const handleSelectGroupChange = (selectedValue: number | null) => {
    if (selectedValue === null) {
      setError('Пожалуйста, выберите группу');
      setSelectedGroup(null);
    } else {
      setError(null);
      setSelectedGroup(selectedValue);
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
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
  };

  const handleCancel = () => {
    onClose();
  };
    
  return (
    <>
    <Modal
        title="Добавить инструкцию"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <Select
          id="category"
          value={manual.category_id}
          onChange={handleSelectCategoryChange}
          options={optionsCategories}
          placeholder="Выберите категорию"
          error={error}
        />
        <Select
          id="group"
          value={manual.group_id}
          onChange={handleSelectGroupChange}
          options={optionsGroup}
          placeholder="Выберите группу"
          error={error}
        />
        
        <Input
          id="title"
          value={manual.title}
          onChange={handleChange}
          placeholder="Название инструкции"
        />
        <Input
          type="file"
          id="file"
          onChange={handleFileChange}
          placeholder="Выберите файл"
          accept=".pdf"
        />
        <SubmitButton onClick={handleSubmit} />
        <CancelButton onClick={handleCancel} />
      </Modal>
    </>
  );
});

export default FormAddManual;