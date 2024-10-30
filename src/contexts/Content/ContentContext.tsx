import { createContext, useContext, useState } from 'react';
import { ContentContextTypes } from './ContentContext.types';

const ContentDataContext = createContext<ContentContextTypes>({} as ContentContextTypes);

export const ContentDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [contentData, setContentData] = useState<ContentContextTypes>({});

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