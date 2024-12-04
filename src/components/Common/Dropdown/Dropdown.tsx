import React, { useState } from 'react';
import { Selected, OptionsList, Option as OptionStyled } from './Dropdown.styles';
import { DropdownTypes, Option } from './Dropdown.types';

const Dropdown: React.FC<DropdownTypes> = ({ options, onSelect, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: Option) => {
        if (!option.disabled) { // Проверяем, отключена ли опция
            onSelect(option);
            setIsOpen(false);
        }
    };

    return (
        <>
            <Selected onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
            </Selected>
            {isOpen && (
                <OptionsList>
                    {options.map((option) => (
                        <OptionStyled 
                            key={option.value} 
                            onClick={() => handleSelect(option)}
                            disabled={option.disabled} // Pass disabled prop
                            value={option.value} // Pass value prop
                            label={option.label} 
                        >
                            {option.label}
                        </OptionStyled>
                    ))}
                </OptionsList>
            )}
        </>
    );
};

export default Dropdown;