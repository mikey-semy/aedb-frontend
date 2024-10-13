import { GroupItem } from "../manuals/nestedManuals";

export interface Category {
    id: number;
    name: string;
    logo_url: string | undefined;
    groups: GroupItem[];
  }