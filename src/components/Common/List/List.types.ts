export interface listItem {
    content: React.ReactNode;
}

export interface ListTypes {
    listItems: listItem[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    bordered?: boolean;
    renderItem?: (item: listItem) => React.ReactNode;
    listItemAs?: any;
}