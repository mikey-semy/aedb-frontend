import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemIcon = styled.span`
    font-size: 20px;
`;

export const ItemLabel = styled.span<{ isCollapsed: boolean }>`
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #474747;
    opacity: 1;
    user-select: none;
    -webkit-user-drag: none;
    max-width: ${props => props.isCollapsed ? '0' : '200px'};
    transition: max-width 0.3s ease-in-out;
    overflow: hidden;
    white-space: nowrap;

    & > span {
        opacity: ${props => props.isCollapsed ? 0 : 1};
        transition: opacity 0.3s ease-in-out;
    }
`;

export const ItemLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const NavigationItem = styled.li<{ isCollapsed: boolean }>`
    display: flex;
    align-items: center;
    padding: ${props => props.isCollapsed ? '4px' : '0 12px'};
    height: 60px;
    transition: padding .3s ease-in-out;
    cursor: pointer;
    
    &.active {
        background-color: #F1EEFE;
        border-radius: 5px;

        ${ItemLabel} {
            color: #7839CD
        }
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