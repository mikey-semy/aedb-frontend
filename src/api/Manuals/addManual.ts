import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { Manual } from '../../types/manuals/manual';

export const addManual = (manual:Manual): Promise<Manual> =>
  api.post<Manual>('/api/v1/manuals/', manual)
    .then(handleApiResponse)
    .catch(handleApiError);