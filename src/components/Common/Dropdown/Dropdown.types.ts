export interface Option {
    value: string;
    label: string;
}

export interface DropdownTypes {
    options: Option[];
    onSelect: (option: Option) => void;
    selectedOption: Option | null;
}