import api from '../../api/axiosConfig';
import { CategoryItem } from '../../types/nested_manuals';

const getManuals = async (): Promise<CategoryItem[]> => {
  try {
    const response = await api.delete<CategoryItem[]>('/nested_manuals');
    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке каталога:', error);
    throw error;
  }
};

export default getManuals;