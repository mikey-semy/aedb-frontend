import { ContentData } from '@/contexts/Content/Content.types';

export interface ContentToolbarProps {
    contentData: ContentData;
    children: React.ReactNode;
}