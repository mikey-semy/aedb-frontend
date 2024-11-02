import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../Common/Button/Button.styles';

const { isCollapsed } = useSidebar();

export const EdgeTrigger = styled.div`
    @media (max-width: 1024px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        z-index: 998;
    }
`;

export const CollapseButtonContainer = styled(ButtonContainer)`

    margin-right: auto;
    /* transform: ${props => props.isCollapsed ? '' : 'translateX(var(--sidebar-width))' }; */
    /* width: ${props => props.isCollapsed ? '40px' : '100%'}; */
    text-align: center;
    transition: all var(--transition-default);
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
    @media (max-width: 1024px) {
        transform: ${props => props.isCollapsed ? '' : 'translateX(var(--sidebar-width))' };
    }
    /* @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: var(--nav-collapse-button-width, 30px);
        height: var(--nav-collapse-button-height, 60px);
        background: var(--sidebar-background);
        box-shadow: var(--nav-collapse-button-box-shadow);
        border-radius: var(--nav-collapse-button-border-radius);
        z-index: 1000; 
        pointer-events: all;
    } */
`;

export const CollapseButtonTitle = styled(ButtonTitle)`
    display: ${props => props.isCollapsed ? 'none' : 'block'};
`;

export const CollapseButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-collapse-button-font-size, 26px);
    transform: ${props => props.isCollapsed ? 'rotate(180deg)' : 'none'};
    transition: transform var(--transition-default);
    min-width: var(--nav-collapse-button-font-size, 26px);
    min-height: var(--nav-collapse-button-font-size, 26px);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;