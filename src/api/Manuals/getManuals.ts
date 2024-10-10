import api from '../../api/axiosConfig';
import { CategoryItem } from '../../types/nested_manuals';

const getManuals = async (): Promise<CategoryItem[]> => {
  try {
    const response = await api.get<CategoryItem[]>('/api/v1/manuals/nested');
    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке каталога:', error);
    throw error;
  }
};

export default getManuals;