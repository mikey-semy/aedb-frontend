export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    $isSelected?: boolean
}

export interface DropdownTypes {
    options: Option[];
    onSelect: (option: Option) => void;
    selectedOption: Option | null;
}