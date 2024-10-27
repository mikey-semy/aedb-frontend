import styled from 'styled-components';

export const MenuContainer = styled.div<{ isCollapsed: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.isCollapsed ? 
        'var(--menu-collapsed-width, 50px)' : 'var(--menu-width, 262px)'};

    transform: translateX(0);
    transition: all var(--transition-default);

    background: var(--menu-background, #FFFFFF);
    box-shadow: var(--box-shadow-default, 0 0 0 1px #ccc);
    
    overscroll-behavior: contain; // Запрещаем нативный свайп
    touch-action: pan-y pinch-zoom; // Разрешаем только вертикальный скролл

    @media (max-width: 1024px) {
        transform: translateX(${props => props.isCollapsed ? '-80%' : '0'});
    }
`;
