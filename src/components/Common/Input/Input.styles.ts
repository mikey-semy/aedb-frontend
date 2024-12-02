import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 280px;
`;

export const InputField = styled.input<{ hasError?: boolean }>`
    padding: 8px 12px;
    border: none;
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
    background-color: var(--input-background);
    color: var(--input-color);
    font-size: 14px;
    margin-bottom: 20px;
    
    &:focus {
        outline: none;
        border-color: var(--input-focus-color);
    }
    
    &:disabled {
        background-color: var(--input-disabled-background);
        color: var(--input-disabled-color);
        cursor: not-allowed;
    }

    &[type="file"] {
        padding: 8px 8px 8px 0;
        box-shadow: none;
        background-color: var(--input-file-button-background);
        color: var(--input-file-button-color);
        

        &::-webkit-file-upload-button {
            visibility: hidden;
            width: 0;
        }
        &::before {
            content: 'Выбрать файл';
            display: inline-block;
            padding: 8px 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;

export const InputLabel = styled.label`
    color: var(--input-label-color);
    font-size: 14px; 
`;

export const ErrorText = styled.span`
    color: var(--error-color);
    font-size: 12px;
`;
