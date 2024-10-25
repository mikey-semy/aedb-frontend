import React, { useState } from 'react';
import MainLogo from './MainLogo';
import MainNavigation from './MainNavigation';
import { MenuContainer } from './MenuContainerStyles';

const MainMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <MenuContainer isCollapsed={isCollapsed}>
            <MainLogo />
            <MainNavigation />
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? '>' : '<'}
            </button>
        </MenuContainer>
    )
}
export default MainMenu;