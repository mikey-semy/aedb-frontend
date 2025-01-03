import styled from 'styled-components';

export const CollapseButtonContainer = styled.button<{ $isCollapsed: boolean }>`
    background-color: var(--button-collapse-bg-color, #ffffff);
    box-shadow: var(--box-shadow-default);
    border-radius: var(--border-radius-default);
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-right: auto;
    text-align: center;
    transition: all var(--transition-default);
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
    z-index: 1000;
    /* position: absolute;
    top: 3%;

    left: ${({ $isCollapsed }) => ($isCollapsed ? '40px' : 'calc(var(--sidebar-width, 262px) + 10px)')}; */

    @media (max-width: 1024px) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: ${({ $isCollapsed }) => ($isCollapsed ? '20px' : 'calc(var(--sidebar-width, 262px) + 10px)')};
    }
`;

export const CollapseButtonTitle = styled.span <{ $isCollapsed: boolean }>``;

export const CollapseButtonIcon = styled.span <{ $isCollapsed: boolean }>`
    color: var(--nav-icon-color);
    font-size: var(--nav-collapse-button-font-size, 26px);
    transform: ${props => props.$isCollapsed ? 'rotate(180deg)' : 'none'};
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
