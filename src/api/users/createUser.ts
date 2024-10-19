import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { NewUser } from '../../types/users/users';

export const createUser = (new_user:NewUser): Promise<NewUser> =>
  api.post<NewUser>('/api/v1/token/create', new_user)
    .then(handleApiResponse)
    .catch(handleApiError);