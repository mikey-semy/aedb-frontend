import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { Manual } from '../../types/manuals/manual';

export const updateManual = (manual: Manual): Promise<Manual[]> =>
    api.put<Manual[]>(`/api/v1/manuals/${manual.id}`, manual)
      .then(handleApiResponse)
      .catch(handleApiError);
