import styled from 'styled-components';

export const ESafetyPageContainer = styled.div`
    
    margin-top: calc(var(--header-height, 80px) + 24px);
    margin-right: 24px;
    margin-bottom: 48px;
    margin-left: calc(262px + 24px);
    /* margin-left: ${props => props.isCollapsed ? 'calc(50px + 24px)' : 'calc(262px + 24px)'};
    width: ${props => props.isCollapsed ? 'calc(100% - 50px - 24px)' : 'calc(100% - 262px - 24px)'}; */

    padding: 16px;
    background: var(--content-background, #FFFFFF);
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: calc(100% - 56px);
    overflow: hidden;
`;