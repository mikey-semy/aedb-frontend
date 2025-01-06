import styled from 'styled-components';

export const UserMenuContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`;

export const Menu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    margin-top: 12px;
    background: var(--option-list-background);
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
    z-index: 1000;
`;

export const MenuItem = styled.div`
    padding: 12px 16px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background: var(--option-item-hover-background);
    }
`;