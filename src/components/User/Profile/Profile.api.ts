import api, { handleApiResponse, handleApiError } from '@/api';
import { ProfileForm, PasswordForm, ProfileResponse } from './Profile.types';

export const getUserProfile = (token: string): Promise<ProfileForm> =>
    api.get('/api/v1/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(handleApiResponse)
    .catch(handleApiError);

export const updateUserProfile = (token: string, profileData: ProfileForm): Promise<ProfileResponse> =>
    api.put('/api/v1/users/profile', profileData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(handleApiResponse)
    .catch(handleApiError);

export const updatePassword = (token: string, passwordData: PasswordForm): Promise<ProfileResponse> =>
    api.put('/api/v1/users/password', passwordData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(handleApiResponse)
    .catch(handleApiError);
