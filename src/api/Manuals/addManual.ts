import api from '../axiosConfig';

const addManual = async(manual: any) => {
    try {
        const response = await api.post('/manual', manual);
        console.log('Инструкция добавлена:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при добавлении инструкции:', error);
        throw error;
    }
};

export default addManual;