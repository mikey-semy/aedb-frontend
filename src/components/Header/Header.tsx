import React from 'react';
import { HeaderContainer, RightButtonsContainer } from './Header.styles';
import { ThemeButton, CollapseButton} from './Buttons';
import { RadioPlayer } from '@/components';
import { useSidebar } from '@/contexts';
import { Logout } from '@/components';

const Header: React.FC = () => {
    const { isCollapsed } = useSidebar();
    return (
        <>
            <HeaderContainer>
                <CollapseButton isCollapsed={isCollapsed}/>   
                <RightButtonsContainer>
                    <RadioPlayer />
                    <ThemeButton />
                    <Logout />
                </RightButtonsContainer>
            </HeaderContainer>
        </>
    )
}
export default Header;