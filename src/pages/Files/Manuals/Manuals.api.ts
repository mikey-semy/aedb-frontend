import api, { handleApiResponse, handleApiError}  from '@/api';
import { 
    ManualFormData, 
    ManualListItem, 
    CategoryTypes, 
    GroupTypes 
} from './Manuals.types';

export const addManual = (manual: ManualFormData): Promise<ManualFormData> =>
    api.post<ManualFormData>('/api/v1/manuals/add', manual)
        .then(handleApiResponse)
        .catch(handleApiError);

export const getManuals = (): Promise<ManualListItem[]> =>
    api.get<ManualListItem[]>('/api/v1/manuals/list')
        .then(handleApiResponse)
        .catch(handleApiError);

export const updateManual = (manual: ManualFormData): Promise<ManualFormData> =>
    api.put<ManualFormData>(`/api/v1/manuals/${manual.id}`, manual)
        .then(handleApiResponse)
        .catch(handleApiError);

export const removeManual = (manualId: number): Promise<number> =>
    api.delete<number>(`/api/v1/manuals/${manualId}`)
        .then(handleApiResponse)
        .catch(handleApiError);
        
export const getCategories = (): Promise<CategoryTypes[]> =>
    api.get<CategoryTypes[]>('/api/v1/manuals/categories')
        .then(handleApiResponse)
        .catch(handleApiError);

export const getGroupsByCategory = (selectedCategoryId: number): Promise<GroupTypes[]> =>
    api.get<GroupTypes[]>(`/api/v1/manuals/groups/${selectedCategoryId}`)
        .then(handleApiResponse)
        .catch(handleApiError);