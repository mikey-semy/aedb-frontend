import styled from 'styled-components';

export const ListCaption = styled.h3`
    color: var(--color-text-primary);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const ListItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ListItem = styled.li`
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-background-secondary);
`;
