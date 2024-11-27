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
    font-size: 14px;
    margin-bottom: 20px;
    
    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
    
    &:disabled {
        background-color: var(--color-disabled);
        cursor: not-allowed;
    }

    &[type="file"] {
        padding: 8px 8px 8px 0;
        box-shadow: none;
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
    font-size: 14px;
    color: var(--color-text-secondary);
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: var(--color-error);
`;
