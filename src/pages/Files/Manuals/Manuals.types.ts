export interface ManualListItem {
  category_name: string;
  group_name: string;
  manual_name: string;
  manual_url: string;
}

export interface ManualFormData {
  id: number;
  title: string;
  file: File | null;
  group_id: number;
  category_id: number;
}

export interface ManualsTypes {
  searchValue: string;
  onFetchManualItems: (fetchManualItems: () => Promise<void>) => void;
}

export interface ManualTypes {
  id: number;
  title: string;
  file_url: string;
  group_id: number;
  category_id: number;
}

export interface GroupTypes {
  id: number;
  name: string;
  manuals: ManualTypes[];
}

export interface CategoryTypes {
    id: number;
    name: string;
    groups: GroupTypes[];
  }