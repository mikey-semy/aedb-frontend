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
    background-color: var(--option-selected-background);
    color: var(--option-selected-color);

    ${({ isSelected }) => isSelected && `
        font-weight: bold; // Жирный шрифт для выделения
        outline: 2px solid #0969da; // Рамка для выделения
        border-radius: 4px; // Скругление углов рамки
    `}
`;