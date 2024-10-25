import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83px;
    width: 100%;
`;
export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 214px;
    height: 59px;
    padding: 12px 24px;
`;

export const LogoText = styled.span<{ isCollapsed: boolean }>`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-family: 'Squada One', sans-serif;
    font-size: ${props => props.isCollapsed ? '24px' : '58px'};
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    user-select: none;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    transform-origin: left top;
    transform: ${props => props.isCollapsed ? 
        'rotate(-90deg) translateX(-50px) translateY(10px)' 
        : 'rotate(0)'};
    white-space: nowrap;
`;