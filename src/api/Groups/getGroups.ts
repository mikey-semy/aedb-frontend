import api from '../axiosConfig';
const getGroups = async() => {
    try {
        const response = await api.get('/groups')
        console.log('Группы получены:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке групп:', error)
        throw error;
    }
};

export default getGroups;