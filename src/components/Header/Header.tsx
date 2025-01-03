import React from 'react';
import { HeaderContainer, RightButtonsContainer, CenterButtonContainer} from './Header.styles';
import { ThemeButton, CollapseButton} from './Buttons';
import { RadioPlayer } from '@/components';
import { useSidebar } from '@/contexts';
import { Logout } from '@/components';

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
                    <Logout />
                </RightButtonsContainer>
            </HeaderContainer>
        </>
    )
}
export default Header;