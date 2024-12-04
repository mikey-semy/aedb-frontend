import React, { useState } from 'react';
import { DropdownContainer, Selected, OptionsList, Option as OptionStyled } from './Dropdown.styles';
import { DropdownTypes, Option } from './Dropdown.types';

const Dropdown: React.FC<DropdownTypes> = ({ options, onSelect, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: Option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <Selected onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
            </Selected>
            {isOpen && (
                <OptionsList>
                    {options.map((option) => (
                        <OptionStyled 
                            key={option.value} 
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </OptionStyled>
                    ))}
                </OptionsList>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;