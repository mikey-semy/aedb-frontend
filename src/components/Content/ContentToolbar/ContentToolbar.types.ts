import { ContentData } from '@/contexts/Content/ContentContext.types';

export interface ContentToolbarProps {
    contentData: ContentData;
    children: React.ReactNode;
}