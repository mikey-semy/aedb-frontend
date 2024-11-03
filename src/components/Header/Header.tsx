import React from 'react';
import { HeaderContainer } from './Header.styles';
import { ThemeButton, CollapseButton } from './Buttons';
import { useSidebar} from '../../contexts';

const Header: React.FC = () => {
    const { isCollapsed } = useSidebar();
    return (
        <>
            <HeaderContainer>
                <CollapseButton isCollapsed={isCollapsed}/>   
                <ThemeButton />
            </HeaderContainer>
        </>
    )
}
export default Header;