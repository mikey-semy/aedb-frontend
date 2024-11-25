import React, { useState } from 'react';

import { FormAddManualTypes } from './FormAddManual.types';
import { FormContainer } from './FormAddManual.styles';

import { Input, Select } from '@/components';
import { SubmitButton, CancelButton } from '@/components/Common/Modal/Buttons';
const FormAddManual: React.FC<FormAddManualTypes> = ({ onSubmit, onCancel }) => {
    
    const [error, setError] = useState<string | null>(null);

    const [manual, setManual] = useState({
        id: 0,
        title: '',
        file: null as File | null,
        group_id: 0,
        category_id: 0,
    })

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, selectedValue: number | null) => {
        const { id } = e.target;

        if (selectedValue === null) {
            switch (id) {
                case 'category':
                    setError('Пожалуйста, выберите категорию');
                    setSelectedCategory(null);
                    break;
                case 'group':
                    setError('Пожалуйста, выберите группу');
                    setSelectedGroup(null);
                    break;
            }           
        } else {
            setError(null);
            setSelectedCategory(selectedValue);
            setSelectedGroup(selectedValue);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setManual(prev => ({ ...prev, [name]: value }));
    }
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setManual(prev => ({ ...prev, file: e.target.files![0] }));
        }
    }

    return (
        <FormContainer>
            <Select
                id="category"
                value={manual.category_id}
                onChange={handleSelectChange}
                options={optionsCategory}
                placeholder="Выберите категорию"
                error={error}
            />
            <Select
                id="group"
                value={manual.group_id}
                onChange={handleSelectChange}
                options={optionsGroup}
                placeholder="Выберите группу"
                error={error}
            />
            <Input
                id="title"
                value={manual.title}
                onChange={handleInputChange}
                placeholder="Название инструкции"
            />
            <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                placeholder="Выберите файл"
                accept=".pdf"
            />
            <SubmitButton onClick={handleSubmit} />
            <CancelButton onClick={handleCancel} />
        </FormContainer>
    );
} 
export default FormAddManual;