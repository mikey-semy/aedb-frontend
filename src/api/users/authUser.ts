import api from '../axiosConfig';
import { handleApiResponse, handleApiError } from '../utils';
import { User } from '../../types/users/users';

export const authUser = (user:User): Promise<User> =>
  api.post<User>('/api/v1/token/', user)
    .then(handleApiResponse)
    .catch(handleApiError);