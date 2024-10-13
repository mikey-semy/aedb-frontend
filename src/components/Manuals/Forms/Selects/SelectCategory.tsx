import React from 'react';
import Select from '../../../common/Form/Select';
import { Category } from '../../../../types/categories/category';
  
  interface SelectCategoryProps {
    categories: Category[];
    value: number | null;
    onChange: (value: number | null) => void;
  }

const SelectCategory: React.FC<SelectCategoryProps> = ({ categories, value, onChange }) => {

  const options = categories.map(cat => ({ value: cat.id.toString(), label: cat.name }))

  return (
    <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder='Выберите категорию'
    />
  );
};

export default SelectCategory;