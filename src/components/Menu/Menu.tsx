import React, { useState } from 'react';
import Logo from '../common/Logo/Logo';
import Navigation from './Navigation/Navigation';
import { MenuContainer } from './Menu.styles';
import { CollapseButton } from './Button/CollapseButton';
import { MdChevronLeft } from 'react-icons/md';
import { EdgeTrigger } from './Button/CollapseButton.styles';

const MainMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a')) return;
        e.preventDefault();
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
        if (touchStart !== null) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) { // Свайп влево
            setIsCollapsed(true);
        }
        if (touchStart - touchEnd < -50) { // Свайп вправо
            setIsCollapsed(false);
        }
    };

    return (
        <>
            <MenuContainer 
                isCollapsed={isCollapsed}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <Logo isCollapsed={isCollapsed} />
                <Navigation isCollapsed={isCollapsed} />
                <CollapseButton 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    isCollapsed={isCollapsed}
                    icon={ MdChevronLeft }
                />
            </MenuContainer>
            <EdgeTrigger 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </>
    )
}
export default MainMenu;