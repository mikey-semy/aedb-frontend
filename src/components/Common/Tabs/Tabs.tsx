import React, { useState } from 'react';
import { TabsTypes } from './Tabs.types';
import { TabsContainer, TabItems, TabItem, TabContent } from './Tabs.styles';

const Tabs: React.FC<TabsTypes> = ({tabs, onTabChange}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        onTabChange?.(index);
    };

    return (
        <TabsContainer>
            <TabItems>
                {tabs.map((tab, index) => (
                    <TabItem 
                        key={index}
                        onClick={() => handleTabClick(index)} 
                        $isActive={ activeTab === index }
                    >
                        {tab.label}
                    </TabItem>
                ))}
            </TabItems>
            {tabs.map((tab, index) => (
                <TabContent 
                    key={index}
                    $isActive={activeTab === index}
                >
                    {tab.content}
                </TabContent>
            ))}
        </TabsContainer>
    );
};

export default Tabs;