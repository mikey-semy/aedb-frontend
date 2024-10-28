import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;

    background: var(--header-background, #FFFFFF);
    box-shadow: var(--box-shadow-default, 0 0 0 1px #ccc);
`;
