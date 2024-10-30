import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    
    height: 80px;
    width: 100%;

    background: var(--header-background, #FFFFFF);
    box-shadow: var(--box-shadow-default);
    z-index: 999;

    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 2px;
        margin-left: 10px;
    }
`;
