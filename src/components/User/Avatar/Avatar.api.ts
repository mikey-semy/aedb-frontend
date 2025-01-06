import api from '@/api';

const COLORS = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B59B6', '#3498DB', '#1ABC9C', '#F1C40F'
];

export const getTextAvatar = (name: string): { initials: string; background: string } => {
    const initials = name?.slice(0, 2).toUpperCase() || '';
    const colorIndex = name
        .split('')
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) % COLORS.length;

    return {
        initials,
        background: COLORS[colorIndex]
    };
};
export const getCurrentUserAvatar = async (): Promise<string> => {
    try {
        const response = await api.get('/api/v1/users/avatar');
        return response.data.url;
    } catch {
        return '';
    }
};

export const getUserAvatar = async (userId: number): Promise<string> => {
    try {
        const response = await api.get(`/api/v1/users/${userId}/avatar`);
        return response.data.url;
    } catch {
        return '';
    }
};

export const updateCurrentUserAvatar = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post(`/api/v1/users/avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data.url;
};