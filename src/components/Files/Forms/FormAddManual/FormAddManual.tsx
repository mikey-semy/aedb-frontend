import React, { useState, useEffect } from 'react';
import { Input, Select, FormAction } from '@/components';
import { FormAddManualTypes } from './FormAddManual.types';
import { FormContainer, ErrorContainer, LoadingContainer, EmptyContainer } from './FormAddManual.styles';
import { ManualFormData, GroupTypes, CategoryTypes } from '@/pages/Files/Manuals/Manuals.types';
import { getCategories, getGroupsByCategory } from '@/pages/Files/Manuals/Manuals.api';
import { BeatLoader } from 'react-spinners';

interface ModalRef {
    open: () => void;
  }

const FormAddManual = React.forwardRef<ModalRef, FormAddManualTypes>((props, ref) => {
    const { onSubmit, onCancel, externalError } = props;

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
        name: '',
        file: null as File | null,
        group_id: 0,
        category_id: 0,
    })

    React.useImperativeHandle(ref, () => ({
        open: () => {
            resetForm();
        }
    }))

    const resetForm = () => {
        setManual({
            id: 0,
            name: '',
            file: null,
            group_id: 0,
            category_id: 0
        });
        setSelectedCategory(null);
        setSelectedGroup(null);
        setError(null);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, selectedValue: number | null) => {
        const { id } = e.target;
        setError(null);
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
        setError(null);
        setManual(prev => ({ ...prev, [name]: value }));
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        if (e.target.files && e.target.files[0]) {
          setManual(prev => ({ ...prev, file: e.target.files![0] }));
        }
    }

    const handleCancel = () => {
        resetForm();
        onCancel();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!manual.name || !manual.file || !selectedGroup || !selectedCategory) {
            setError('Заполните все обязательные поля');
            return;
        }
        setError(null);
        onSubmit({
            id: manual.id,
            name: manual.name,
            file: manual.file,
            group_id: selectedGroup,
            category_id: selectedCategory
        } as ManualFormData);
        resetForm();
    }

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
                id="name"
                name="name"
                value={manual.name}
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
});
export default FormAddManual;