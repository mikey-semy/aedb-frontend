export interface Tab {
    label: string;
    content: React.ReactNode;
}

export interface TabsTypes {
    tabs: Tab[];
    onTabChange?: (index: number) => void;
    defaultTab?: number;
}