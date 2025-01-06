import React, { createContext, useContext, useState } from 'react';
import { SidebarContextType } from './CollapseSidebar.types';

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [$isCollapsed, set$isCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebar');
        return saved ? JSON.parse(saved) : false;
    });
    const toggleScroll = () => {
        document.body.classList.toggle('no-scroll');
      };
    const toggleSidebar = () => {
        toggleScroll();
        const newValue = !$isCollapsed;
        set$isCollapsed(newValue);
        localStorage.setItem('sidebar', JSON.stringify(newValue));
    };

    return (
        <SidebarContext.Provider value={{ $isCollapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
