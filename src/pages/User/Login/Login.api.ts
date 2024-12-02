import api, { handleApiResponse, handleApiError } from '@/api';
import { LoginCredentials, LoginResponse } from './Login.types';


export const login = (credentials: LoginCredentials): Promise<LoginResponse> => {
    const formData = new FormData();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    
    return api.post<LoginResponse>('/api/v1/token', formData)
        .then(response => {
            const { access_token } = handleApiResponse(response);
            localStorage.setItem('token', access_token);
            return response.data;
        })
        .catch(handleApiError);
};