interface CategoryItem {
    id: number;
    name: string;
    logo_url: string | undefined;
    groups: GroupItem[];
  }
  
  interface GroupItem {
    id: number;
    name: string;
    manuals: ManualItem[];
  }
  
  interface ManualItem {
    id: number;
    title: string;
    file_url: string;
    group_id: number;
  }
  
  export type { CategoryItem, GroupItem, ManualItem };