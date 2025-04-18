import styled from 'styled-components';

export const DropdownContainer = styled.select`
    width: 120px;
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
    background-color: var(--input-background);
    color: var(--input-color);
    cursor: pointer;

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

export const Option = styled.option<{ $isSelected: boolean }>`
    padding: 8px;
    font-size: 14px;
    background-color: var(--option-selected-background);
    color: var(--option-selected-color);


    ${({ $isSelected }) => $isSelected && `
        font-weight: bold;
        outline: 2px solid #0969da;
        border-radius: 4px;
    `}
`;