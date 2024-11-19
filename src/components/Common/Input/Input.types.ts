export interface InputTypes {
    id: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'file';
    value?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    accept?: string;
    multiple?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
