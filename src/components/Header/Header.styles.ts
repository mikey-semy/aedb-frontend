import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 32px;
    
    padding: 0 24px;
    height: 80px;
    width: 100%;

    background: var(--header-background, #FFFFFF);
    box-shadow: var(--box-shadow-default);
    z-index: 999;

    @media (max-width: 1024px) {
        height: 60px;
        padding-left: 10px; 
    }
`;
