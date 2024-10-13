import React from 'react';

interface Option {
    value: string;
    label: string;
};

interface SelectProps {
    options: Option[];
    value: number | null;
    onChange: (value: number | null) => void;
    placeholder: string;
};

const Select: React.FC<SelectProps> = ({options, value, onChange, placeholder}) => {
    return (
        <select 
            value={value !== null ? value.toString() : ''} 
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;