import React, { useState, useEffect } from 'react';
import { Input, Select, FormAction } from '@/components';
import { FormAddManualTypes } from './FormAddManual.types';
import { FormContainer, ErrorContainer, LoadingContainer, EmptyContainer } from './FormAddManual.styles';
import { ManualFormData, GroupTypes, CategoryTypes } from '@/pages/Files/Manuals/Manuals.types';
import { getCategories, getGroupsByCategory } from '@/pages/Files/Manuals/Manuals.api';
import { BeatLoader } from 'react-spinners';

const FormAddManual: React.FC<FormAddManualTypes> = ({ onSubmit, onCancel, externalError }) => {
    
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<CategoryTypes[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
    const [groups, setGroups] = useState<GroupTypes[]>([])
    const optionsCategory = categories.map(cat => ({ value: cat.id?.toString() ?? '', label: cat.name }))
    const optionsGroup = groups.map(group => ({ value: group.id?.toString() ?? '', label: group.name }));
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const [manual, setManual] = useState({
        id: 0,
        title: '',
        file: null as File | null,
        group_id: 0,
        category_id: 0,
    })

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
            if (id === 'category') {
                setSelectedCategory(selectedValue);
                setManual(prev => ({ ...prev, category_id: selectedValue }));
            } else if (id === 'group') {
                setSelectedGroup(selectedValue);
                setManual(prev => ({ ...prev, group_id: selectedValue })); 
            }
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

    const handleCancel = () => {
        onCancel();
    };

    useEffect(() => {
        if (selectedCategory && selectedGroup) {
          setError(null);
        }
    }, [selectedCategory, selectedGroup]);

    useEffect(() => {
        setLoading(true);
        getCategories()
            .then(setCategories)
            .catch(error => setError(`Ошибка при загрузке категорий: ${error.message}`))
            .finally(() => setLoading(false));
    }, []);
    
    useEffect(() => {
        if (selectedCategory) {
            setLoading(true);
            getGroupsByCategory(selectedCategory)
                .then(setGroups)
                .catch(error => setError(`Ошибка при загрузке групп: ${error.message}`))
                .finally(() => setLoading(false));
        } else {
            setGroups([]);
        }
        setSelectedGroup(0);
    }, [selectedCategory]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedGroup && selectedCategory) {
            setError(null);
            onSubmit({
                id: manual.id,
                title: manual.title,
                file: manual.file,
                group_id: selectedGroup,
                category_id: selectedCategory
            } as ManualFormData);
        } else {
          // Обработка ошибки: группа или категория не выбраны
          setError('Пожалуйста, выберите категорию и группу');
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            
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
                name="title"
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
            {
                loading ? (
                    <LoadingContainer><BeatLoader /></LoadingContainer>
                ) : error ? (
                    <ErrorContainer>{error}</ErrorContainer>
                ) : externalError ? (
                    <ErrorContainer>{externalError}</ErrorContainer>
                ) : (
                    <EmptyContainer />
                )
            }
            <FormAction
                onRequestCancel={handleCancel}
                contentCancel={{ title: 'Отмена' }}
                contentSubmit={{ title: 'Добавить' }}
                disabled={false}
            />
        </FormContainer>
    );
} 
export default FormAddManual;