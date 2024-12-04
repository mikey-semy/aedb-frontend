import styled from 'styled-components';

export const Dropdown = styled.select`
    width: 150px;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
    background-color: var(--input-background);
    color: var(--input-color);
    cursor: pointer;
    margin-top: 0;
    
    &:focus {
        outline: none;
        border-color: #0366d6;
    }

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const Option = styled.option<{ isSelected: boolean }>`
    padding: 8px;
    font-size: 14px;
    background-color: ${({ isSelected }) => 
        isSelected ? 'var(--option-selected-background)' : 'transparent'};
    color: ${({ isSelected }) => 
        isSelected ? 'var(--option-selected-color)' : '#000000'};

    &:hover {
        background-color: var(--option-hover-background);
        color: var(-option-hover-color);
    }
`;