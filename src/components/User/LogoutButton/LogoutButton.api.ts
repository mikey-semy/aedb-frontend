import api, { handleApiResponse, handleApiError } from '@/api';

export const logout = async () => {
    try {
        const response = await api.post('/api/v1/auth/logout');
        handleApiResponse(response);
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
