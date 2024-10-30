import styled from 'styled-components';

export const ContentHeaderContainer = styled.main`
    padding: 0 24px;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--content-header-background, #FFFFFF);
    color: var(--content-header-color, #000000);
    box-shadow: var(--box-shadow-default);
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
`;
export const ContentActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;