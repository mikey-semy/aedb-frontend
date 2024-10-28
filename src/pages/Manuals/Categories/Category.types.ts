import { GroupTypes } from "../Groups/Group.types";

export interface CategoryTypes {
    id: number;
    name: string;
    logo_url: string | undefined;
    groups: GroupTypes[];
  }