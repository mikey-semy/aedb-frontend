export interface TreeItem {
    id: string;
    name: string;
    children?: TreeItem[];
}
  
export interface TreeTypes {
    items: TreeItem[];
}