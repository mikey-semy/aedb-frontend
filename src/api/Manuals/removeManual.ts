import api from '../axiosConfig';

const removeManual = async(manual: any) => {
    try {
        const response = await api.delete(`/manual/${manual.id}`);
        console.log('Инструкция удалена:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении инструкции:', error);
        throw error;
    }
};

export default removeManual;