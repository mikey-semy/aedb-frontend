import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';

export const removeManual = (manualId: number): Promise<number> =>
    api.delete<number>(`/api/v1/manuals/${manualId}`)
      .then(handleApiResponse)
      .catch(handleApiError);