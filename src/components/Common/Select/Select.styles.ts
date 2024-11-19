import styled from 'styled-components';

export const SelectContainer = styled.select<{ hasError?: boolean }>`
    width: 280px;
    padding: 8px 12px;
    border: none;
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
    font-size: 14px;
    outline: none;
    
    &:focus {
        border-color: #007bff;
    }
    
    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;

export const Option = styled.option`
    padding: 8px;
    font-size: 14px;
`;