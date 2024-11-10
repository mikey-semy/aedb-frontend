import api, { handleApiResponse, handleApiError}  from '@/api';
import { GroupTypes } from './Group.types';

export const getGroups = (): Promise<GroupTypes[]> =>
    api.get<GroupTypes[]>('/api/v1/manuals/groups')
        .then(handleApiResponse)
        .catch(handleApiError);

export const getGroupsByCategory = (selectedCategoryId: number): Promise<GroupTypes[]> =>
    api.get<GroupTypes[]>(`/api/v1/manuals/groups/${selectedCategoryId}`)
        .then(handleApiResponse)
        .catch(handleApiError);