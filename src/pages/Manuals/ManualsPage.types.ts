import { TreeItem } from '@/components/Common/Tree/Tree.types';
export interface ExtendedTreeItem extends TreeItem {
    file_url?: string; // Добавляем поле file_url с вопросительным знаком
    group_id?: number;
    category_id?: number;
}