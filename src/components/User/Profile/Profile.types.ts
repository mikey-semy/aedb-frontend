export interface ProfileForm {
    id: number;
    name: string;
    email: string;
    avatar: string;
  }

export interface PasswordForm {
    old_password: string;
    new_password: string;
    confirm_password: string;
}

export interface AvatarForm {
    avatar: File | null;
}


export interface ProfileResponse {
    success: boolean;
    message?: string;
}