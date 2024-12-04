import styled from 'styled-components';
import { Option as OptionTypes} from './Dropdown.types';

export const DropdownContainer = styled.div`
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

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: auto;


    & {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
    }

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--scrollbar-track-color);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--scrollbar-thumb-hover-color);
    }
`;

export const Selected = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: var(--border-radius-default, 5px);
    cursor: pointer;
    background-color: #fff;
    box-shadow: var(--box-shadow-default);
`;

export const OptionsList = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
`;

export const Option = styled.div<OptionTypes>`
    padding: 8px;
    font-size: 14px;
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'var(--option-selected-background)')}; // Изменяем фон, если отключено
    color: ${({ disabled }) => (disabled ? '#ccc' : 'var(--option-selected-color)')}; // Изменяем цвет текста, если отключено
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; // Изменяем курсор, если отключено

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#e0e0e0')}; // Изменяем цвет при наведении, если не отключено
    }
`;