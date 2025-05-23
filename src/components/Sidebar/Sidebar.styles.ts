import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ $isCollapsed: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    height: 100%;
    width: ${props => props.$isCollapsed ?
        'var(--sidebar-collapsed-width, 50px)' : 'var(--sidebar-width, 262px)'};

    transform: translateX(0);
    transition: all var(--transition-default);

    background: var(--sidebar-background, #FFFFFF);
    box-shadow: var(--box-shadow-default, 0 0 0 1px #ccc);

    /* overscroll-behavior: none; // Запрещаем нативный свайп */
    /* touch-action: none; // Разрешаем только вертикальный скролл */

    /* pointer-events: ${props => props.$isCollapsed ? 'none' : 'auto'};
    & * {
        pointer-events: auto; // Все дочерние элементы всегда могут принимать события
    } */
    z-index: 1000;
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(${props => props.$isCollapsed ? '-80%' : '0'});
    }
`;

export const Overlay = styled.div<{ $isVisible: boolean }>`
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: ${props => props.$isVisible ? 1 : 0};
        visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
        transition: opacity 0.3s, visibility 0.3s;
        display: ${props => (props.$isVisible ? 'block' : 'none')};
        z-index: 999;
    }
`;