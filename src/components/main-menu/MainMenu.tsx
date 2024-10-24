import React, { useState } from 'react';
import MainLogo from './MainLogo';
import MainNavigation from './MainNavigation';
import TestMenu from './TestMenu';
const MainMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`main-menu ${isCollapsed ? 'main-menu--collapsed' : ''}`}>
            <MainLogo />
            <MainNavigation />
            <button onClick={() => setIsCollapsed(!isCollapsed)}>Свернуть/Развернуть</button>
            <TestMenu />
        </div>
    )
}
export default MainMenu;