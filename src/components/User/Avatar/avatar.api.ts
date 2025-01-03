import api from '@/api';


export const getAvatarUrl = async (userId: number): Promise<string> => {
    const response = await api.get(`/users/${userId}/avatar`);
    return response.data.url;
};

export const uploadAvatar = async (userId: number, file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('avatar', file);

    const response = await api.post(`/users/${userId}/avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data.url;
};