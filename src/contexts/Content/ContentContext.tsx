import { createContext, useContext, useState, ReactNode } from 'react';
import { ContentData, ContentContextTypes, defaultContentData } from './ContentContext.types';

const ContentDataContext = createContext<ContentContextTypes | undefined>(undefined);

export const ContentDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [contentData, setContentData] = useState<ContentData>(defaultContentData);

    return (
        <ContentDataContext.Provider value={{ contentData, setContentData }}>
            {children}
        </ContentDataContext.Provider>
    );
};

export const useContentData = () => {
    const context = useContext(ContentDataContext);
    if (!context) {
        throw new Error('useContentData must be used within a ContentDataProvider');
    }
    return context;
};