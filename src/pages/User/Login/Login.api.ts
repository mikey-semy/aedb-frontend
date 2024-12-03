import api, { handleApiResponse, handleApiError } from '@/api';
import { LoginCredentials, LoginResponse } from './Login.types';
import { useNavigate } from 'react-router-dom';

export const login = (credentials: LoginCredentials): Promise<LoginResponse> => {
    const formData = new URLSearchParams();
    const navigate = useNavigate();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    formData.append('grant_type', 'password');
    formData.append('scope', '');
    formData.append('client_id', 'string');
    formData.append('client_secret', 'string');

    return api.post<LoginResponse>('/api/v1/token', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        const { access_token, token_type } = handleApiResponse(response);
        localStorage.setItem('token', access_token);
        localStorage.setItem('token_type', token_type);
        navigate('/files');
        return response.data;
    })
    .catch(handleApiError);
};