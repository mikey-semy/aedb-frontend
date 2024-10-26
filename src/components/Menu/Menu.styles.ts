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
        'var(--menu-collapsed-width)' : 'var(--menu-width-desktop)'};
    transition: width var(--transition-default); 
    
    background: var(--menu-background);
    box-shadow: var(--box-shadow-default);
    
    overscroll-behavior: contain; // Запрещаем нативный свайп
    touch-action: pan-y pinch-zoom; // Разрешаем только вертикальный скролл

    @media (max-width: var(--desktop)) {
        transform: translateX(${props => props.isCollapsed ? '-100%' : '0'});
        transition: var(--transition-default);
        width: var(--menu-width-desktop);
    }

    @media (max-width: var(--tablet)) {
        width: var(--menu-width-tablet);
    }

    @media (max-width: var(--mobile)) {
        width: var(--menu-width-mobile);
    }
`;
