import { useState, useEffect } from 'react';
import { AvatarTypes } from './avatar.types';
import { AvatarContainer, AvatarImage, DefaultAvatar } from './avatar.styles';
import { getCurrentUserAvatar, getTextAvatar } from './avatar.api';
import { useAuth, useTheme } from '@/contexts';
import { ClipLoader } from 'react-spinners';

const Avatar: React.FC<AvatarTypes> = ({
    UserData,
    size = 40,
    onClick,
    previewFile,
    loading = false
}) => {
    const { user } = useAuth();
    const { isDark } = useTheme();
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
    const currentUserId = UserData?.id || user?.id;
    const currentUserName = UserData?.name || user?.name;
    const textAvatar = getTextAvatar(currentUserName || '');
    const [isLoading, setIsLoading] = useState(loading);
    const loadingIcon = isLoading ? (
        <ClipLoader
            color={isDark ? 'var(--loader-color)' : 'var(--loader-color)'}
            size={40}
        />
    ) : null;

    useEffect(() => {
        const fetchAvatar = async () => {
            if (!currentUserId) {
                setAvatarUrl(undefined);
                return;
            }
            setIsLoading(true);
            try {
                const url = await getCurrentUserAvatar();
                setAvatarUrl(url);
            } catch {
                const fallbackUrl = UserData?.avatar || user?.avatar;
                setAvatarUrl(fallbackUrl);
            } finally {
                setIsLoading(false);
            }
        };
        // let isSubscribed = true;

        // if (isSubscribed) {
        //     fetchAvatar();
        // }
        // return () => {
        //     isSubscribed = false;
        // };
        fetchAvatar();
    }, [currentUserId, UserData?.avatar, user?.avatar]);

    if (!avatarUrl) {
        return (
            <DefaultAvatar
                size={size}
                onClick={onClick}
                style={{ background: textAvatar.background }}
            >
                {isLoading ? loadingIcon : textAvatar.initials}
            </DefaultAvatar>
        );
    }

    if (previewFile) {
        return (
            <AvatarContainer size={size} onClick={onClick}>
                {isLoading ? (
                    loadingIcon
                ) : (
                    <AvatarImage
                        src={URL.createObjectURL(previewFile)}
                        alt={currentUserName}
                    />
                )}
            </AvatarContainer>
        );
    }

    return (
        <AvatarContainer
            size={size}
            onClick={onClick}
        >
            {isLoading ? (
                loadingIcon
            ) : (
                <AvatarImage
                    src={avatarUrl}
                    alt={currentUserName}
                />
            )}
        </AvatarContainer>
    );
};

export default Avatar;