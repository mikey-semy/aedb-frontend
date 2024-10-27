import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ItemIcon = styled.span`
    color: var(--nav-icon-color, #000000);
    font-size: var(--nav-icon-size, 20px);
`;

export const ItemLabel = styled.span<{ isCollapsed: boolean }>`
    display: block;
    font-family: var(--nav-label-font, 'Inter');
    font-weight: var(--nav-label-font-weight, 600);
    font-size: var(--nav-label-font-size, 16px);
    color: var(--nav-label-color, #474747);
    opacity: 1;
    user-select: none;
    -webkit-user-drag: none;
    max-width: ${props => props.isCollapsed ? '0' : 'var(--nav-label-max-width, 200px)'};
    transition: max-width var(--transition-default);
    overflow: hidden;
    white-space: nowrap;

    & > span {
        opacity: ${props => props.isCollapsed ? 0 : 1};
        transition: opacity var(--transition-default);
    }
`;

export const ItemLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;

    &.active {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--nav-active-bg, #F1EEFE);
            border-radius: 5px;
            z-index: -1;
        }
        

        ${ItemLabel} {
            color: var(--nav-label-active-color, #7839CD);
        }

        ${ItemIcon} {
            color: var(--nav-icon-active-color, #7839CD);
        }
    }

    &:hover {
        /* opacity: var(--link-hover-opacity, 0.8); */
        ${ItemLabel} {
            color: var(--nav-label-hover-color, #000);
        }
        ${ItemIcon} {
            color: var(--nav-icon-hover-color, #000);
        }
    }
    
    &:visited {
        color: inherit;
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

export const NavigationItem = styled.li<{ isCollapsed: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding: ${props => props.isCollapsed ? '4px' : '0 12px'};
    height: 60px;
    transition: padding .3s ease-in-out;
    cursor: pointer;
    border-radius: 5px;

    // Изменение фона NavigationItem при наведении
    &:hover {
        background-color: var(--nav-hover-bg, rgba(0,0,0,0.05));
    }
`;

export const NavigationItems = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    margin: 0;
    list-style: none;
`;

export const NavigationContainer = styled.nav`
    width: 100%;
`;