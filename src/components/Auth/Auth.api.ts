import api, { handleApiResponse, handleApiError}  from '../../api';
import { User, NewUser} from './Auth.types';

export const authUser = (user:User): Promise<User> =>
    api.post<User>('/api/v1/token/', user)
        .then(handleApiResponse)
        .catch(handleApiError);
    
export const createUser = (new_user:NewUser): Promise<NewUser> =>
    api.post<NewUser>('/api/v1/token/create', new_user)
        .then(handleApiResponse)
        .catch(handleApiError);