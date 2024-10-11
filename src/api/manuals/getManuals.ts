import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { CategoryItem } from '../../types/manuals/nestedManuals';

export const getManuals = (): Promise<CategoryItem[]> =>
  api.get<CategoryItem[]>('/api/v1/manuals/nested')
    .then(handleApiResponse)
    .catch(handleApiError);