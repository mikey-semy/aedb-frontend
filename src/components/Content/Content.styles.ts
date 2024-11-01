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
    overflow: hidden;

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb-color, #ccc);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: var(--scrollbar-track-color, #f5f5f5);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--scrollbar-thumb-hover-color, #aaa);
    }

    @media (max-width: 1024px) {
        margin: 140px 0 0 10px;
        border-radius: 0;
    }
`;