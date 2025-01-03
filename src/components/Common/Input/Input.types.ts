export interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    error?: string;
    $hasError?: boolean;
}
