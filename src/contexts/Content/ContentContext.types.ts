import { IconType } from 'react-icons';

export interface ContentContextTypes {
    contentData: {
        caption?: string;
        title?: string;
        icon?: IconType;
        onClick?: () => void;
    };
    setContentData: React.Dispatch<React.SetStateAction<ContentContextTypes>>;
}