import React, { useState, useEffect } from 'react';
import { TabsTypes } from './Tabs.types';
import { TabsContainer, TabItems, TabItem, TabContent } from './Tabs.styles';

const Tabs: React.FC<TabsTypes> = ({tabs, onTabChange, defaultTab}) => {
    const [activeTab, setActiveTab] = useState(defaultTab || 0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        onTabChange?.(index);
    };

    useEffect(() => {
        if (defaultTab !== undefined) {
            setActiveTab(defaultTab);
            onTabChange?.(defaultTab);
        }
    }, [defaultTab, onTabChange]);

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