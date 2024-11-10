import { ManualTypes } from "@/pages/Manuals/Manuals/Manual.types";

export interface GroupTypes {
    id: number;
    name: string;
    manuals: ManualTypes[];
  }