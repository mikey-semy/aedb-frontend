import { IconType } from 'react-icons';

export interface NavigationTypes {
    label: string;
    icon?: IconType;
    path?: string;
    subItems?: NavigationTypes[];
  }