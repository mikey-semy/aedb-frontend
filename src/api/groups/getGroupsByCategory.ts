import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { Group } from '../../types/groups/group';

export const getGroupsByCategory = (selectedCategoryId: number): Promise<Group[]> =>
  api.get<Group[]>(`/api/v1/manuals/groups/${selectedCategoryId}`)
    .then(handleApiResponse)
    .catch(handleApiError);