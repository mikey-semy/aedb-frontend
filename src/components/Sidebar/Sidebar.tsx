import React from 'react';
import { SidebarContainer, Overlay } from './Sidebar.styles';
import Logo from '@/components/Common/Logo';
import Navigation from './Navigation';
import EdgeTrigger from './Buttons';
import { useSidebar } from '@/contexts';

const Sidebar: React.FC = () => {
    const { $isCollapsed, toggleSidebar } = useSidebar();

    return (
        <>
            <Overlay $isVisible={!$isCollapsed} onClick={toggleSidebar}/>
            <SidebarContainer
                $isCollapsed={$isCollapsed}
            >
                <Logo $isCollapsed={$isCollapsed} />
                <Navigation />

            </SidebarContainer>
            <EdgeTrigger />
        </>
    )
}
export default Sidebar;