import React from 'react';

import { SidebarContainer } from './Sidebar.styles';
import Logo from '../Common/Logo';
import Navigation from './Navigation';
import {
    EdgeTrigger,
} from './Buttons';
import { useSidebar } from '../../contexts';

const Sidebar: React.FC = () => {
    const { isCollapsed } = useSidebar();
    
    // const [touchStart, setTouchStart] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);

    // const handleTouchStart = (e: React.TouchEvent) => {
    //     const target = e.target as HTMLElement;
    //     if (target.closest('a')) return;
    //     e.cancelable = false;
    //     setTouchStart(e.targetTouches[0].clientX);
    // };

    // const handleTouchMove = (e: React.TouchEvent) => {
    //     e.cancelable = false;
    //     if (touchStart !== null) {
    //         setTouchEnd(e.targetTouches[0].clientX);
    //     }
    // };

    // const handleTouchEnd = () => {
    //     if (touchStart - touchEnd > 50) { // Свайп влево
    //         setIsCollapsed(true);
    //     }
    //     if (touchStart - touchEnd < -50) { // Свайп вправо
    //         setIsCollapsed(false);
    //     }
    // };

    return (
        <>
            <SidebarContainer
                // onTouchStart={handleTouchStart}
                // onTouchMove={handleTouchMove}
                // onTouchEnd={handleTouchEnd}
                isCollapsed={isCollapsed}
            >
                <Logo isCollapsed={isCollapsed} />
                <Navigation isCollapsed={isCollapsed} />
                
            </SidebarContainer>
            <EdgeTrigger
                // onTouchStart={handleTouchStart}
                // onTouchMove={handleTouchMove}
                // onTouchEnd={handleTouchEnd}
            />
        </>
    )
}
export default Sidebar;