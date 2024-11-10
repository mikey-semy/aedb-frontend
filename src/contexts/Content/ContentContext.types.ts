import { IconType } from 'react-icons';

export interface ContentData {
    contentData: {
        caption?: string;
        title?: string;
        icon?: IconType;
        onClick?: () => void;
    };
    setContentData: React.Dispatch<React.SetStateAction<ContentContextTypes>>;
}

export interface ContentContextTypes {
    contentData: ContentData; // Используем отдельный интерфейс
    setContentData: React.Dispatch<React.SetStateAction<ContentData>>; // Обновляем тип
}