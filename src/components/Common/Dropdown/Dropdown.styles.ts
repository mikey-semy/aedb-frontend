import styled from 'styled-components';
import { Option as OptionTypes} from './Dropdown.types';

export const DropdownContainer = styled.div`
    width: 120px;
    cursor: pointer;
`;

export const Selected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    background-color: var(--option-selected-background);
    color: var(--option-selected-color);
    box-shadow: var(--box-shadow-default);
    border-radius: var(--border-radius-default);
    cursor: pointer;
`;

export const OptionsList = styled.div`
    position: absolute;
    z-index: 1;
    background-color: var(--option-selected-background);
    color: var(--option-selected-color);
    border: none;
    box-shadow: var(--box-shadow-default);
    border-radius: var(--border-radius-default);
    max-height: 200px;
    overflow-y: auto;
    width: 100%;


    &:focus {
        outline: none;
        border-color: #0366d6;
    }

    @media (max-width: 768px) {
        width: 200px;
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

export const Option = styled.div<OptionTypes>`
    padding: 8px;
    font-size: 16px;
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'var(--option-selected-background)')}; 
    color: ${({ disabled }) => (disabled ? '#ccc' : 'var(--option-selected-color)')}; 
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; 

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'var(--option-hover-background)')}; 
    }
`;