import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const InputField = styled.input<{ hasError?: boolean }>`
    padding: 8px 12px;
    border: 1px solid ${props => props.hasError ? 'var(--color-error)' : 'var(--color-border)'};
    border-radius: var(--border-radius-default);
    font-size: 14px;
    
    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
    
    &:disabled {
        background-color: var(--color-disabled);
        cursor: not-allowed;
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
