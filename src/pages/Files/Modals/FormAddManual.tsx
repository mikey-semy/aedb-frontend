import React, { useState } from 'react';
import Modal from '@/components/Common/Modal/Modal';
import { Input, Select } from '@/components';

const FormAddManual = React.forwardRef(function FormAddManual({}, ref) {
  const [manual, setManual] = useState({
    id: 0,
    title: '',
    file: null as File | null,
    group_id: 0 
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setManual(prev => ({ ...prev, file: e.target.files![0] }));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setManual(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async () => {
    console.log("Добавление инструкции")
  }

  return (
    <>
    <Modal
        title="Добавить инструкцию"
        openButtonTitle="Добавить инструкцию"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <Select
          id="category"
          value={manual.group_id}
          onChange={handleChange}
          options={[
            { value: 1, label: 'Категория 1' },
            { value: 2, label: 'Категория 2' },
            { value: 3, label: 'Категория 3' },
          ]}
          placeholder="Выберите категорию"
        />
        <Select
          id="group"
          value={manual.group_id}
          onChange={handleChange}
          options={[
            { value: 1, label: 'Группа 1' },
            { value: 2, label: 'Группа 2' },
            { value: 3, label: 'Группа 3' },
          ]}
          placeholder="Выберите группу"
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
      </Modal>
    </>
  );
});

export default FormAddManual;