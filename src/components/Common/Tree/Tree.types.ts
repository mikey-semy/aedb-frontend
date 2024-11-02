export interface TreeItem {
    id: number;
    name: string;
    children?: TreeItem[];
}
  
export interface TreeTypes {
    items: TreeItem[];
}