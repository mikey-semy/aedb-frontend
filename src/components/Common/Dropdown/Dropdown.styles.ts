import styled from 'styled-components';
import { Option as OptionTypes} from './Dropdown.types';

export const DropdownContainer = styled.div`
    width: 120px;
    cursor: pointer;
`;

export const Select = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    background-color: var(--select-background);
    color: var(--select-color);

    border: none;
    box-shadow: var(--box-shadow-default);
    border-radius: var(--border-radius-default);

    cursor: pointer;

    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const OptionsList = styled.div`
    position: absolute;
    z-index: 1;

    background-color: var(--option-list-background);
    color: var(--option-list-color);

    border: none;
    box-shadow: var(--box-shadow-default);
    border-radius: var(--border-radius-default);

    max-height: 400px;
    width: 100%;
    overflow-y: auto;



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

    font-size: 16px;
    padding: 15px 20px;
    cursor: ${({ disabled }) => (disabled
        ? 'not-allowed'
        : 'pointer')
    };

    background-color: ${
                        ({ disabled, $isSelected }) =>
                            $isSelected
                            ? 'var(--option-item-selected-background)'
                            : (disabled ? 'var(--option-item-disabled-background)'
                            : 'var(--option-item-background)')
                        };
    color: ${
        ({ disabled, $isSelected }) =>
            $isSelected
            ? 'var(--option-item-selected-color)'
            : (disabled ? 'var(--option-item-disabled-color)'
            : 'var(--option-item-color)')
        };

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        background-color: ${
            ({ disabled }) => (
                    disabled
                    ? 'var(--option-item-disabled-background)'
                    : 'var(--option-item-hover-background)'
                )
            };
        color: ${
            ({ disabled }) => (
                    disabled
                    ? 'var(--option-item-disabled-color)'
                    : 'var(--option-item-hover-color)'
                )
            };
    }

`;