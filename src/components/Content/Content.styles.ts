import styled from 'styled-components';

export const ContentContainer = styled.main`
    
    margin-top: 24px;
    margin-right: 24px;
    margin-bottom: 24px;
    margin-left: 24px;
    padding: 16px;
    background: var(--content-background, #FFFFFF);
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    display: flex;
    flex-direction: column;
    flex: 1;
    height: calc(100% - 56px);
    overflow: hidden;
    /* min-height: 80vh; */

    @media (max-width: 1024px) {
        margin-right: 10px;
        margin-left: 20px;
    }
`;