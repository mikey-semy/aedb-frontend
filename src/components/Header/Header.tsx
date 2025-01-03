import React from 'react';
import { HeaderContainer, RightButtonsContainer, CenterButtonContainer} from './Header.styles';
import { ThemeButton, CollapseButton } from './Buttons';
import { UserMenu, RadioPlayer } from '@/components';
import { useSidebar } from '@/contexts';


const Header: React.FC = () => {
    const { $isCollapsed } = useSidebar();
    return (
        <>
            <HeaderContainer>
                <CollapseButton $isCollapsed={$isCollapsed}/>

                <CenterButtonContainer>
                    <RadioPlayer />
                </CenterButtonContainer>
                <RightButtonsContainer>

                    <ThemeButton />
                    <UserMenu />
                </RightButtonsContainer>
            </HeaderContainer>
        </>
    )
}
export default Header;