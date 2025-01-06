export interface AvatarTypes {
    onClick?: () => void;
    UserData?: User;
    size?: number;
    previewFile?: File | null;
    loading?: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}