import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { ManualItem } from '../../types/manuals/nestedManuals';

export const updateManual = (manual: ManualItem): Promise<ManualItem[]> =>
    api.put<ManualItem[]>(`/api/v1/manuals/${manual.id}`, manual)
      .then(handleApiResponse)
      .catch(handleApiError);
