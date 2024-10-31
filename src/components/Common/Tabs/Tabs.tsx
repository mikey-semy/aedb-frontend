import React, { useState } from 'react';
import { TabsTypes } from './Tabs.types';
import { TabsContainer, TabItems, TabItem, TabContent, ActiveTabItem } from './Tabs.styles';

const Tabs: React.FC<TabsTypes> = ({tabs}) => {
    const [isActiveTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <TabsContainer>
            <TabItems>
                {tabs.map((tab, index) => (
                    <TabItem 
                        key={index}
                        onClick={() => handleTabClick(index)} 
                        as={isActiveTab === index ? ActiveTabItem : TabItem}
                    >
                        {tab.label}
                    </TabItem>
                ))}
            </TabItems>
            {tabs.map((tab, index) => (
                <TabContent 
                    key={index}
                    isActiveTab={isActiveTab === index}
                >
                    {tab.content}
                </TabContent>
            ))}
        </TabsContainer>
    );
};

export default Tabs;