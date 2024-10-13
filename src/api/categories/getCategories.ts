import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { Category } from '../../types/categories/category';

export const getCategories = (): Promise<Category[]> =>
  api.get<Category[]>('/api/v1/manuals/categories')
    .then(handleApiResponse)
    .catch(handleApiError);