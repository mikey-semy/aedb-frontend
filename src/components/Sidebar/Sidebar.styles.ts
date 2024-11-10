import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isCollapsed: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    height: 100%;
    width: ${props => props.isCollapsed ? 
        'var(--sidebar-collapsed-width, 50px)' : 'var(--sidebar-width, 262px)'};

    transform: translateX(0);
    transition: all var(--transition-default);

    background: var(--sidebar-background, #FFFFFF);
    box-shadow: var(--box-shadow-default, 0 0 0 1px #ccc);
    
    /* overscroll-behavior: none; // Запрещаем нативный свайп */
    /* touch-action: none; // Разрешаем только вертикальный скролл */
    
    /* pointer-events: ${props => props.isCollapsed ? 'none' : 'auto'};
    & * {
        pointer-events: auto; // Все дочерние элементы всегда могут принимать события
    } */
    z-index: 1000;
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(${props => props.isCollapsed ? '-80%' : '0'});
    }
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); // Полупрозрачный черный фон
        transition: all var(--transition-default);
        display: ${props => (props.isVisible ? 'block' : 'none')};
        z-index: 999; // Убедитесь, что оверлей находится под боковой панелью
    }
`;