import api from '../axiosConfig';

const updateManual = async(manual: any) => {
    try {
        const response = await api.put(`/api/v1/manuals/manual/${manual.id}`, manual);
        console.log('Инструкция обновлена:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении инструкции:', error);
        throw error;
    }
};

export default updateManual;