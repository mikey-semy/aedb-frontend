import styled from 'styled-components';

export const ContentHeaderContainer = styled.div`
    padding: 0 24px;
    height: var(--content-header-height, 60px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--content-header-background, #FFFFFF);
    color: var(--content-header-color, #000000);
    box-shadow: var(--box-shadow-default);
    z-index: 2;

    @media (max-width: 1024px) {
        position: fixed;
        top: var(--content-fixed-top-mobile, 60px);
        left: 0;
        width: 100%;
        height: var(--content-header-height-mobile, 60px);
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