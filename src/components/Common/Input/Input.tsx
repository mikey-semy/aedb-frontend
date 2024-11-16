import React from 'react';
import { InputContainer, InputField, InputLabel, ErrorText } from './Input.styles';
import { InputTypes } from './Input.types';

const Input: React.FC<InputTypes> = ({
    id,
    type = "text",
    value = '',
    placeholder,
    label,
    error,
    disabled = false,
    onChange,
}) => {
  return (
    <InputContainer>
        {label && <InputLabel>{label}</InputLabel>}
        <InputField
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            hasError={!!error}
        />
        {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;