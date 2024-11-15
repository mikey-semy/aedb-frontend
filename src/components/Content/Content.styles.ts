import styled from 'styled-components';

export const ContentContainer = styled.main`

    margin: 24px;
    background: var(--content-background, #FFFFFF);
    color: var(--content-color, #000000);
    font-family: var(--content-font, 'Inter');
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    display: flex;
    flex-direction: column;
    flex: 1;
    height: calc(100% - 56px);
    min-height: 80vh;
    overflow-y: auto;
    z-index: 1;
    & {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 4px;
    }
   
    &::-webkit-scrollbar-track {
        background-color: var(--scrollbar-track-color);
        border-radius: 4px;
    }
   
    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--scrollbar-thumb-hover-color);
    }
    
    @media (max-width: 1024px) {

        margin: 170px 0 0 10px;
        border-radius: 0;
    }
`;