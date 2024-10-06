import api from '../axiosConfig';

const removeManual = async(manualId: number) => {
    try {
        const response = await api.delete(`/manual/${manualId}`);
        console.log('Инструкция удалена:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении инструкции:', error);
        throw error;
    }
};

export default removeManual;