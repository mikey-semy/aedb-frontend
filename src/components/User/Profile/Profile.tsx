import React, { useEffect, useState } from 'react';
import {
    ProfileContainer,
    ProfileSection,
    FormWithAvatar,
    ProfileTitle,
    FormProfile,
    ProfileHeader,
    ProfileContent,
    InputGroup,
    ProfileInputLabel,
    AvatarUpload,
    AvatarInput,
    AvatarLabel,
    ProfileButton,
    ProfileButtonIcon
} from './Profile.styles';
import { useAuth } from '@/contexts';
import { Input, Button, Avatar as AvatarPreview } from '@/components';
import { ProfileForm, PasswordForm } from './Profile.types'; // Предполагается, что у вас есть типы для профиля
import {
    getUserProfile,
    updateUserProfile,
    updatePassword,
    uploadAvatar
} from './Profile.api';

const Profile: React.FC = () => {
    const { user, token } = useAuth(); // Получаем пользователя и токен из контекста
    const [profileData, setProfileData] = useState<ProfileForm>({
        id: user?.id || 0,
        name: user?.name || '',
        email: user?.email || '',
        avatar: user?.avatar || ''
    });
    const [passwordData, setPasswordData] = useState<PasswordForm>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [avatar, setAvatar] = useState<File | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile(token);
                setProfileData(data);
            } catch (err) {
                setError('Ошибка при загрузке профиля');
            }
        };

        fetchProfile();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await updateUserProfile(token, profileData);
            alert('Профиль обновлен успешно!');
        } catch (err) {
            setError('Ошибка при обновлении профиля');
        }

    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            await updatePassword(token, passwordData);
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            alert('Пароль успешно изменен');
        } catch (err) {
            setError('Ошибка при изменении пароля');
        }
    };

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            await uploadAvatar(token, formData);
            setAvatar(file);
            // Обновляем данные профиля чтобы получить новый URL аватара
            const updatedProfile = await getUserProfile(token);
            setProfileData(updatedProfile);
        } catch (err) {
            setError('Ошибка при загрузке аватара');
        }
    };

    return (
        <ProfileContainer>
            <ProfileSection>
                <ProfileHeader>
                    <ProfileTitle>Основная информация</ProfileTitle>
                </ProfileHeader>
                <ProfileContent>
                    <FormWithAvatar>
                        <FormProfile onSubmit={handleSubmit}>
                            <InputGroup>
                                <Input
                                    id="username"
                                    type="text"
                                    label="Имя"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                    placeholder="Как вас называть?"
                                    $hasError={!!error}
                                    LabelComponent={ProfileInputLabel}
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    label="Email"
                                    value={profileData.email}
                                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                                    placeholder="example@domain.com"
                                    $hasError={!!error}
                                    LabelComponent={ProfileInputLabel}
                                />
                            </InputGroup>
                            <Button
                                as={ProfileButton}
                                iconAs={ProfileButtonIcon}
                                type="submit"
                                title="Сохранить"
                            />
                        </FormProfile>
                        <AvatarUpload>
                            <AvatarPreview
                                UserData={profileData}
                                size={100}
                                previewFile={avatar}
                            />
                            <AvatarLabel>
                                <AvatarInput
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarUpload}
                                />
                                Загрузить новый аватар
                            </AvatarLabel>
                        </AvatarUpload>
                    </FormWithAvatar>
                </ProfileContent>
            </ProfileSection>

            <ProfileSection>
                <ProfileHeader>
                    <ProfileTitle>Изменение пароля</ProfileTitle>
                </ProfileHeader>
                <ProfileContent>
                    <FormProfile onSubmit={handlePasswordSubmit}>
                        <InputGroup>
                            <Input
                                id="currentPassword"
                                type="password"
                                label="Текущий пароль"
                                placeholder="••••••••"
                                LabelComponent={ProfileInputLabel}
                            />
                            <Input
                                id="newPassword"
                                type="password"
                                label="Новый пароль"
                                placeholder="Минимум 8 символов"
                                LabelComponent={ProfileInputLabel}
                            />
                            <Input
                                id="confirmPassword"
                                type="password"
                                label="Подтвердите пароль"
                                placeholder="Повторите новый пароль"
                                LabelComponent={ProfileInputLabel}
                            />
                        </InputGroup>
                        <Button
                            as={ProfileButton}
                            iconAs={ProfileButtonIcon}
                            type="submit"
                            title="Изменить пароль"
                        />
                    </FormProfile>
                </ProfileContent>
            </ProfileSection>
        </ProfileContainer>

    );
};
export default Profile;