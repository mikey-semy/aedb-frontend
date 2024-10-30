export interface ContentContextType {
    contentData: {
        caption: string;
        buttonTitle: string;
    };
    setContentData: React.Dispatch<React.SetStateAction<{ 
        caption: string; 
        buttonTitle: string;
    }>>;
}