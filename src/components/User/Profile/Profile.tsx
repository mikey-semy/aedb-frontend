import React, { useState, useEffect } from 'react';
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
    ProfileButtonIcon,
    ErrorContainer
} from './Profile.styles';
import { useAuth, useToast } from '@/contexts';
import { Input, Button, Avatar as AvatarPreview } from '@/components';
import { ProfileForm, PasswordForm } from './Profile.types';
import {
    getUserProfile,
    updateUserProfile,
    updatePassword
} from './Profile.api';
import { updateCurrentUserAvatar } from '@/components/User/Avatar/avatar.api';

const Profile: React.FC = () => {
    const { user, token, setUser, profileCache, setProfileCache } = useAuth();
    const { addToast } = useToast();
    const [profileData, setProfileData] = useState<ProfileForm>({
        id: user?.id || 0,
        name: user?.name || '',
        email: user?.email || '',
        avatar: user?.avatar || ''
    });
    const isProfileDataChanged =
        profileData.name !== user?.name ||
        profileData.email !== user?.email;
    const [passwordData, setPasswordData] = useState<PasswordForm>({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });
    const [avatar, setAvatar] = useState<File | null>(null);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        avatar: '',
        old_password: '',
        new_password: '',
        confirm_password: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({...errors, name: '', email: ''});

        try {
            await updateUserProfile(token, profileData);
            setUser({
                ...user,
                name: profileData.name,
                email: profileData.email
            });
            addToast({
                type: 'success',
                title: 'Успех',
                message: 'Профиль обновлен успешно'
            });
        } catch (err: unknown) {
            if (typeof err === 'object' && err !== null && 'response' in err) {
                const errorResponse = err as { response?: { data?: { error_type?: string } } };
                if (errorResponse.response?.data?.error_type === 'name_exists') {
                    setErrors({...errors, name: 'Такое имя уже существует'});
                } else if (errorResponse.response?.data?.error_type === 'email_exists') {
                    setErrors({...errors, email: 'Такой email уже существует'});
                }
            }
            addToast({
                type: 'error',
                title: 'Ошибка',
                message: 'Не удалось обновить профиль'
            });
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({...errors, old_password: '', new_password: '', confirm_password: ''});

        if (passwordData.new_password !== passwordData.confirm_password) {
            setErrors({
                ...errors,
                confirm_password: 'Пароли не совпадают'
            });
            return;
        }

        try {
            await updatePassword(token, passwordData);
            setPasswordData({
                old_password: '',
                new_password: '',
                confirm_password: ''
            });
            addToast({
                type: 'success',
                title: 'Успех',
                message: 'Пароль успешно изменен'
            });
            setErrors({...errors, old_password: '', new_password: '', confirm_password: ''});
        } catch (err) {
            setErrors({
                ...errors,
                old_password: 'Неверный текущий пароль'
            });
            addToast({
                type: 'error',
                title: 'Ошибка',
                message: 'Не удалось изменить пароль'
            });
        }
    };
    const refreshProfileCache = async () => {
        const profile = await getUserProfile(token);
        setProfileCache(profile);
    };
    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const avatarUrl = await updateCurrentUserAvatar(file);
            const updatedProfile = await getUserProfile(token);

            setProfileData(updatedProfile);
            setProfileCache(updatedProfile);
            setUser({
                ...user,
                avatar: avatarUrl,
                name: updatedProfile.name,
                email: updatedProfile.email
            });

            await refreshProfileCache();

            setAvatar(null);
            setErrors({...errors, avatar: ''});
            addToast({
                type: 'success',
                title: 'Успех',
                message: 'Аватар успешно обновлен'
            });
        } catch (err: unknown) {
            if (err instanceof Error && 'response' in err) {
                setErrors({
                    ...errors,
                    avatar: (err as any).response?.data?.detail || 'Ошибка при загрузке аватара'
                });
            } else {
                setErrors({
                    ...errors,
                    avatar: 'Ошибка при загрузке аватара'
                });
                addToast({
                    type: 'error',
                    title: 'Ошибка',
                    message: 'Не удалось загрузить аватар'
                });
            }
        }
    };

    useEffect(() => {
        const loadProfile = async () => {
            if (profileCache) {
                setProfileData(profileCache);
                return;
            }
            const profile = await getUserProfile(token);
            setProfileData(profile);
            setProfileCache(profile);
        };

        loadProfile();
    }, [token]);

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
                                    id="name"
                                    type="text"
                                    label="Имя"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                    placeholder="Как вас называть?"
                                    $hasError={!!errors.name}
                                    $LabelComponent={ProfileInputLabel}
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    label="Email"
                                    value={profileData.email}
                                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                                    placeholder="example@domain.com"
                                    $hasError={!!errors.email}
                                    $LabelComponent={ProfileInputLabel}
                                />
                            </InputGroup>
                            <Button
                                as={ProfileButton}
                                iconAs={ProfileButtonIcon}
                                type="submit"
                                title="Сохранить"
                                disabled={!isProfileDataChanged || !profileData.name || !profileData.email}
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
                            {errors.avatar && <ErrorContainer>{errors.avatar}</ErrorContainer>}
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
                                id="old_password"
                                type="password"
                                label="Текущий пароль"
                                placeholder="••••••••"
                                value={passwordData.old_password}
                                onChange={(e) => setPasswordData({...passwordData, old_password: e.target.value})}
                                $LabelComponent={ProfileInputLabel}
                                $hasError={!!errors.old_password}
                            />
                            <Input
                                id="new_password"
                                type="password"
                                label="Новый пароль"
                                placeholder="Минимум 8 символов"
                                value={passwordData.new_password}
                                onChange={(e) => setPasswordData({...passwordData, new_password: e.target.value})}
                                $LabelComponent={ProfileInputLabel}
                                $hasError={!!errors.new_password}
                            />
                            <Input
                                id="confirm_password"
                                type="password"
                                label="Подтвердите пароль"
                                placeholder="Повторите новый пароль"
                                value={passwordData.confirm_password}
                                onChange={(e) => setPasswordData({...passwordData, confirm_password: e.target.value})}
                                $LabelComponent={ProfileInputLabel}
                                $hasError={!!errors.confirm_password}
                            />
                        </InputGroup>
                        <Button
                            as={ProfileButton}
                            iconAs={ProfileButtonIcon}
                            type="submit"
                            title="Изменить пароль"
                            disabled={!passwordData.old_password
                                    || !passwordData.new_password
                                    || !passwordData.confirm_password}
                        />
                    </FormProfile>
                </ProfileContent>
            </ProfileSection>
        </ProfileContainer>

    );
};
export default Profile;