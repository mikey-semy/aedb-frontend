import React from 'react';
import { SelectTypes } from './Select.types';
import { SelectContainer, Option } from './Select.styles';

const Select: React.FC<SelectTypes> = ({
    id,
    options = [],
    value,
    onChange,
    placeholder,
    disabled,
    error,
    label
}) => {
    return (
        <>
            {label && <label>{label}</label>} 
            <SelectContainer
                id={id}
                value={value !== null ? value.toString() : ''}
                onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
                disabled={disabled}
                hasError={!!error}
            >
                <Option value="">{placeholder}</Option>
                {options?.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </SelectContainer>
            {error && <span>{error}</span>}
        </>
    );
};

export default Select;