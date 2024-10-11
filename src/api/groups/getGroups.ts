import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { Group } from '../../types/groups/group';

export const getGroups = (): Promise<Group[]> =>
  api.get<Group[]>('/api/v1/manuals/groups')
    .then(handleApiResponse)
    .catch(handleApiError);