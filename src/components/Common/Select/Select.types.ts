export interface SelectTypes {
    id: string;
    options: Array<{value: number|string, label: string}>;
    value: number | null;
    onChange: (value: number | null) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string | null;
    label?: string;
}