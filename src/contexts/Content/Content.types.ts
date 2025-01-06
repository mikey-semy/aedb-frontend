import { IconType } from 'react-icons';

export interface ContentData {
    caption?: string;
    title?: string;
    icon?: IconType;
    onClick?: () => void;
    isToolbar?: boolean;
    toolbarContent?: React.ReactNode;
}

export interface ContentContextTypes {
    contentData: ContentData; // Используем отдельный интерфейс
    setContentData: React.Dispatch<React.SetStateAction<ContentData>>; // Обновляем тип
}

export const defaultContentData: ContentData = {
    caption: '',
    title: '',
    icon: undefined,
    onClick: undefined,
    isToolbar: false,
    toolbarContent: '',
};