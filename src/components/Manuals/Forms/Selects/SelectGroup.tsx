import React from 'react';
import Select from '../../../common/Form/Select';
import { Group } from '../../../../types/groups/group';

interface SelectGroupProps {
    groups: Group[];
    value: number | null;
    onChange: (value: number | null) => void;
  }

const SelectGroup: React.FC<SelectGroupProps> = ({ groups, value, onChange }) => {
  
  const options = groups.map(group => ({ value: group.id.toString(), label: group.name }));
  
  return (
    <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder='Выберите группу'
    />
  );
};

export default SelectGroup;