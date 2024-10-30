import React, { useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';
// import { BsSun, BsMoon } from "react-icons/bs";

// import { useTheme } from '../../assets/styles';
import { SidebarContainer } from './Sidebar.styles';

import Logo from '../Common/Logo';
import Navigation from './Navigation';
import {
    CollapseButton,
    EdgeTrigger,
    // ThemeButton
} from './Buttons';



const Sidebar: React.FC = () => {
    // const { isDark, toggleTheme } = useTheme();
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
            <SidebarContainer
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                isCollapsed={isCollapsed}
            >
                <Logo isCollapsed={isCollapsed} />
                <Navigation isCollapsed={isCollapsed} />
            {/* <ThemeButton
                onClick={toggleTheme}
                isCollapsed={isCollapsed}
                icon={isDark ? BsSun : BsMoon}
            /> */}
                <CollapseButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    isCollapsed={isCollapsed}
                    icon={MdChevronLeft}
                />
            </SidebarContainer>
            <EdgeTrigger
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </>
    )
}
export default Sidebar;