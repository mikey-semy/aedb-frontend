// import React, { useState, useEffect } from 'react';

// import FormAction from '@/components/Common/FormAction/FormAction';

// import SelectCategory from './Selects/SelectCategory';
// import SelectGroup from './Selects/SelectGroup';

// import { CategoryTypes } from '@/pages/Manuals/Categories/Category.types';
// import { GroupTypes } from '@/pages/Manuals/Groups/Group.types';
// import { ManualTypes } from '@/pages/Manuals/Manuals/Manual.types';

// import { getCategories } from '@/pages/Manuals/Categories/Category.api';
// import { getGroupsByCategory } from '@/pages/Manuals/Groups/Group.api';

// interface FormUpdateManualProps {
//   initialValuesCategory: CategoryTypes;
//   initialValuesManual: ManualTypes;
//   onSubmit: (manual: ManualTypes) => void;
//   onCancel: () => void;
// }

// const FormUpdateManual: React.FC<FormUpdateManualProps> = ({ initialValuesCategory, initialValuesManual, onSubmit, onCancel }) => {
//   const [error, setError] = useState<string | null>(null);
//   const [manual, setManual] = useState<ManualTypes>(initialValuesManual);
//   const [selectedGroup, setSelectedGroup] = useState<number | null>(initialValuesManual.group_id);
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(initialValuesCategory.id ?? 0);
//   const [categories, setCategories] = useState<CategoryTypes[]>([initialValuesCategory])
//   const [groups, setGroups] = useState<GroupTypes[]>(initialValuesCategory.groups)

//   useEffect(() => {
//     getCategories()
//       .then(fetchedCategories => {
//         setCategories(() => {
//         const newCategories = fetchedCategories.filter(cat => cat.id !== initialValuesCategory.id);
//         return [initialValuesCategory, ...newCategories];
//         });
//       })
//       .catch(error => setError(`Ошибка при загрузке категорий: ${error.message}`));
//   }, []);

//   useEffect(() => {
//     if (selectedCategory && selectedCategory !== initialValuesCategory.id) {
//       getGroupsByCategory(selectedCategory)
//         .then(setGroups)
//         .catch(error => setError(`Ошибка при загрузке групп: ${error.message}`));
//     } else if (selectedCategory === initialValuesCategory.id) {
//       setGroups(initialValuesCategory.groups);
//     }
//   }, [selectedCategory]);
  

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setManual(prev => ({ ...prev, [name]: value }));
  
//     if (name === 'category_id') {
//       setSelectedCategory(Number(value));
//     } else if (name === 'group_id') {
//       setSelectedGroup(Number(value));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (selectedGroup && selectedCategory) {
//       setError(null);
//       onSubmit(manual);
//     } else {
//       // Обработка ошибки: группа или категория не выбраны
//       setError('Пожалуйста, выберите категорию и группу');
//     }
//   };

//   useEffect(() => {
//     if (selectedCategory && selectedGroup) {
//       setError(null);
//     }
//   }, [selectedCategory, selectedGroup]);
  
//   return (
//     <form className='form form--manual-update' onSubmit={handleSubmit}>
//       <SelectCategory
//         categories={categories}
//         value={selectedCategory}
//         onChange={(value) => {
//           setSelectedCategory(value);
//           handleChange({ target: { name: 'category_id', value: value?.toString() || '' } } as React.ChangeEvent<HTMLSelectElement>);
//         }}
//       />
//       <SelectGroup
//         groups={groups}
//         value={selectedGroup}
//         onChange={(value) => {
//           setSelectedGroup(value);
//           handleChange({ target: { name: 'group_id', value: value?.toString() || '' } } as React.ChangeEvent<HTMLSelectElement>);
//         }}
//       />
//       <input
//         type="text"
//         name="title"
//         value={manual.title}
//         onChange={handleChange}
//         placeholder="Название инструкции"
//         required
//       />
//       <input
//         type="url"
//         name="file_url"
//         value={manual.file_url}
//         onChange={handleChange}
//         placeholder="URL файла инструкции"
//         required
//       />
//       <FormAction
//         onRequestCancel={onCancel}
//         contentCancel={{icon: '', title: 'Отмена'}}
//         contentSubmit={{icon: '', title: 'Обновить'}}
//         disabled={!!error}
//       />
//       {error && <div className="error-message">{error}</div>}
//     </form>
//   );
// };

// export default FormUpdateManual;