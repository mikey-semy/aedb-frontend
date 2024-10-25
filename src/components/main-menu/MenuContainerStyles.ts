import styled from 'styled-components';

export const MenuContainer = styled.div<{ isCollapsed: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: ${props => props.isCollapsed ? '50px' : '262px'};
    height: 100%;
    transition: width 0.3s ease-in-out;
    background: white;

    .main-logo__text {
        display: ${props => props.isCollapsed ? 'none' : 'block'};
    }

    .main-nav__lable {
        display: ${props => props.isCollapsed ? 'none' : 'block'};
    }
`;
