import styled from 'styled-components';

export const MenuContainer = styled.div<{ isCollapsed: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.isCollapsed ? '50px' : '262px'};
    transition: width 0.3s ease-in-out;
    background: white;
    box-shadow: 0 0 0 1px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    transition: width .3s ease-in-out;
`;
