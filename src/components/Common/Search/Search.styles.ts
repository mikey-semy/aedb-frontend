import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    width: 280px;
    height: 48px;
    display: flex;
    align-items: center;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 12px 36px;
    border: 0;
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    background-color: var(--search-background, #ffffff);
    font-size: 16px;
    font-weight: 400;
    color: var(--search-color, #000000);
    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`;

export const SearchIcon = styled.span`
    position: absolute;
    left: 12px;
    color: var(--search-color, #000000);
    pointer-events: none;
`;

export const ClearButton = styled.button`
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--search-color, #000000);
    
    &:hover {
        color: var(--color-text-primary);
    }
`;