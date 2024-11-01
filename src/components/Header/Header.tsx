import React from 'react';
import { BsSun, BsMoon } from "react-icons/bs";
import { MdChevronLeft } from 'react-icons/md';
import { useTheme, useSidebar} from '../../contexts';
import { HeaderContainer } from './Header.styles';
import {
    ThemeButton, CollapseButton,
} from './Buttons';

const Header: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const { toggleSidebar, isCollapsed } = useSidebar();
    return (
        <>
            <HeaderContainer>
                <CollapseButton
                    onClick={toggleSidebar}
                    isCollapsed={isCollapsed}
                    icon={MdChevronLeft}
                />   
                <ThemeButton
                    onClick={toggleTheme}
                    icon={isDark ? BsSun : BsMoon}
                />
            </HeaderContainer>
        </>
    )
}
export default Header;