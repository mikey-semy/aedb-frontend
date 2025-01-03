export interface ProfileForm {
    id: number;
    name: string;
    email: string;
    avatar: string;
  }

export interface PasswordForm {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface AvatarForm {
    avatar: File | null;
}


export interface ProfileResponse {
    success: boolean;
    message?: string;
}