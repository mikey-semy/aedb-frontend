import React, { useState, useEffect, useRef } from 'react';
import { DropdownContainer, Select, OptionsList, Option as OptionStyled } from './Dropdown.styles';
import { DropdownTypes, Option } from './Dropdown.types';

const Dropdown: React.FC<DropdownTypes> = ({ options, onSelect, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: Option) => {
        if (!option.disabled) {
            onSelect(option);
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <DropdownContainer ref={dropdownRef}>
            <Select onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Выберите...'}
            </Select>
            {isOpen && (
                <OptionsList>
                    {options.map((option, index) => (
                        <OptionStyled 
                            key={`${option.value}-${index}`}
                            onClick={() => handleSelect(option)}
                            disabled={option.disabled}
                            value={option.value}
                            label={option.label}
                            isSelected={selectedOption?.value === option.value}
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