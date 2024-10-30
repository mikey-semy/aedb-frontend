import { createContext, useContext, useState } from 'react';
import { ContentContextType } from './ContentContext.types';

const ContentDataContext = createContext<ContentContextType>({} as ContentContextType);
export const ContentDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [contentData, setContentData] = useState({ caption: 'Заголовок контента' });

    return (
        <ContentDataContext.Provider value={{ contentData, setContentData }}>
            {children}
        </ContentDataContext.Provider>
    );
};

export const useContentData = () => useContext(ContentDataContext);