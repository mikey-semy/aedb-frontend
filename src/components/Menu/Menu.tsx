import React, { useState } from 'react';
import Logo from '../common/Logo/Logo';
import Navigation from './Navigation/Navigation';
import { MenuContainer } from './Menu.styles';
import { CollapseButton } from './Button/CollapseButton';
import { MdChevronLeft } from 'react-icons/md';
const MainMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <MenuContainer isCollapsed={isCollapsed}>
                <Logo isCollapsed={isCollapsed} />
                <Navigation isCollapsed={isCollapsed} />
                <CollapseButton 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={ MdChevronLeft }
                    isCollapsed={isCollapsed}
                />
        </MenuContainer>
    )
}
export default MainMenu;