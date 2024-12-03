import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
    padding: 0 24px;
    height: var(--header-height, 60px);
    width: 100%;
    background: var(--header-background, #FFFFFF);
    box-shadow: var(--box-shadow-default);
    z-index: 999;

    @media (max-width: 1024px) {
        position: fixed;
        top: var(--header-fixed-top-mobile, 0);
        left: 0;
        width: 100%;
        height: var(--header-height-mobile, 60px);
        padding-left: 10px;
        padding-right: 10px; 
    }
`;

export const CenterButtonContainer = styled.div`
    display: flex;
`;

export const RightButtonsContainer = styled.div`
    display: flex;
    gap: 8px;
`;

