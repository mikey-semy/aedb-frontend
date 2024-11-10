import styled from 'styled-components';

export const ContentHeaderContainer = styled.div`
    padding: 0 24px;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--content-header-background, #FFFFFF);
    color: var(--content-header-color, #000000);
    box-shadow: var(--box-shadow-default);
    @media (max-width: 1024px) {
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        height: 80px;
    }
`;
export const ContentCaptionContainer = styled.div`
    display: flex;
    align-items: flex-end;

`;
export const ContentCaption = styled.h3`
    font-family: var(--content-header-font, 'Inter');
    font-size: 24px;
    font-weight: 600;
    color: var(--content-header-color, #000000);

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;
export const ContentActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;