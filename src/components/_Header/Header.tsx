import React from 'react';
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from '../../assets/styles';
import { HeaderContainer } from './Header.styles';
import {
    ThemeButton
} from './Buttons';



const Header: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <>
            <HeaderContainer>   
                <ThemeButton
                    onClick={toggleTheme}
                    icon={isDark ? BsSun : BsMoon}
                />
            </HeaderContainer>
        </>
    )
}
export default Header;