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


    @media (max-width: 1024px) {
        margin: 0 0 0 10px;
        border-radius: 0;
    }
`;