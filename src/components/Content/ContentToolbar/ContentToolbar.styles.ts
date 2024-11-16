import styled from 'styled-components';

export const ContentToolbarContainer = styled.div`
    padding: 0 24px;
    height: var(--content-toolbar-height, 60px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--content-toolbar-background, #FFFFFF);
    color: var(--content-toolbar-color, #000000);
    box-shadow: var(--box-shadow-default);
    z-index: 2;
    
    @media (max-width: 1024px) {
        position: fixed;
        top: var(--content-toolbar-fixed-top-mobile, 120px);
        left: 0;
        width: 100%;
        height: var(--content-toolbar-height-mobile, 60px);
    }
`;