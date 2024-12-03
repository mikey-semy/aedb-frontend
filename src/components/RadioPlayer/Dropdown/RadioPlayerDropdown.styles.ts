import styled from 'styled-components';

export const Dropdown = styled.select`
    width: 150px;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    background-color: var(--input-background);
    color: var(--input-color);
    cursor: pointer;
    margin-top: 0;
    &:focus {
        outline: none;
        border-color: #0366d6;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;