import { ManualItem } from "../manuals/nestedManuals";
export interface Group {
    id: number;
    name: string;
    manuals: ManualItem[];
  }