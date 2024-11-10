import api, { handleApiResponse, handleApiError}  from '@/api';
import { CategoryTypes } from './Category.types';

export const getCategories = (): Promise<CategoryTypes[]> =>
  api.get<CategoryTypes[]>('/api/v1/manuals/categories')
    .then(handleApiResponse)
    .catch(handleApiError);