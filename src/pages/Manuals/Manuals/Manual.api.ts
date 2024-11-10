import api, { handleApiResponse, handleApiError}  from '@/api';
import { ManualTypes } from './Manual.types';

export const addManual = (manual:ManualTypes): Promise<ManualTypes> =>
    api.post<ManualTypes>('/api/v1/manuals/', manual)
        .then(handleApiResponse)
        .catch(handleApiError);

export const removeManual = (manualId: number): Promise<number> =>
    api.delete<number>(`/api/v1/manuals/${manualId}`)
        .then(handleApiResponse)
        .catch(handleApiError);

export const updateManual = (manual: ManualTypes): Promise<ManualTypes[]> =>
    api.put<ManualTypes[]>(`/api/v1/manuals/${manual.id}`, manual)
        .then(handleApiResponse)
        .catch(handleApiError);