import { createContext, useContext, useState, ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ContentData {
    caption?: string;
    title?: string;
    icon?: IconType;
    onClick?: () => void;
}

export interface ContentContextTypes {
    contentData: ContentData;
    setContentData: React.Dispatch<React.SetStateAction<ContentData>>;
}

const defaultContentData: ContentData = {
    caption: '',
    title: '',
    icon: undefined,
    onClick: undefined,
};

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