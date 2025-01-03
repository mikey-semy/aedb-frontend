import React from 'react';
import { InputContainer, InputField, InputLabel, ErrorText } from './Input.styles';
import { InputTypes } from './Input.types';

const Input: React.FC<InputTypes> = ({
    id,
    label,
    error,
    $hasError = false,
    ...inputProps
}) => {
  return (
    <InputContainer>
        {label && <InputLabel>{label}</InputLabel>}
        <InputField
            id={id}
            $hasError={$hasError}
            {...inputProps}
        />
        {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
