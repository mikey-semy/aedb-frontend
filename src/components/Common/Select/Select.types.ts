export interface SelectTypes {
    options: Array<{value: number|string, label: string}>;
    value: number | null;
    onChange: (value: number | null) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    label?: string;
}