import api, { handleApiError } from '@/api';
import { ResetPasswordForm } from './ResetPassword.types';

export const resetPassword = async (formData: ResetPasswordForm): Promise<void> => {

    try {
        const response = await api.post('/api/v1/auth/reset-password', formData);
        return response.data;

    } catch (error) {
        handleApiError(error);
        throw error;
    }
};