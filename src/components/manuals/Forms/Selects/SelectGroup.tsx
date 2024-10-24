import React, { useState }  from 'react';
import Select from '../../../common/Form/Select';
import { Group } from '../../../../types/groups/group';

interface SelectGroupProps {
    groups: Group[];
    value: number | null;
    onChange: (value: number | null) => void;
  }

const SelectGroup: React.FC<SelectGroupProps> = ({ groups, value, onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const options = groups.map(group => ({ value: group.id.toString(), label: group.name }));
  
  const handleChange = (selectedValue: number | null) => {
    if (selectedValue === null) {
        setError('Пожалуйста, выберите группу');
        onChange(null);
    } else {
        setError(null);
        onChange(selectedValue);
    }
};
  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder='Выберите группу'
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
    
  );
};

export default SelectGroup;