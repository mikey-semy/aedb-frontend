import styled from 'styled-components';

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    width: 800px;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const ListItem = styled.li<{ $bordered?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    height: 52px;

    border-bottom: ${ props => props.$bordered ? '1px solid var(--box-shadow-color)' : 'none' };

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: var(--list-item-hover-background, #f5f5f5);
    }

    @media (max-width: 1024px) {
        height: 84px;
    }
`;

export const ListHeader = styled(ListItem)``;
export const ListFooter = styled(ListItem)``;