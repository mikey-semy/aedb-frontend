import { useState, useEffect } from 'react';
import { AvatarTypes } from './avatar.types';
import { AvatarContainer, AvatarImage, DefaultAvatar } from './avatar.styles';
import { getAvatarUrl } from './avatar.api';
import { useAuth } from '@/contexts';

const Avatar: React.FC<AvatarTypes> = ({
    UserData,
    size = 40,
    onClick,
    previewFile,
}) => {
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
    const { user } = useAuth();

    const currentUserId = UserData?.id || user?.id;
    const currentUserName = UserData?.name || user?.name;

    useEffect(() => {
        const fetchAvatar = async () => {
            if (!currentUserId) return;

            try {
                const url = await getAvatarUrl(currentUserId);
                setAvatarUrl(url);
            } catch {
                setAvatarUrl(undefined);
            }
        };
        fetchAvatar();
    }, [currentUserId]);

    if (!avatarUrl) {
        return (
            <DefaultAvatar
                size={size}
                onClick={onClick}
            >
                {currentUserName?.slice(0, 2).toUpperCase()}
            </DefaultAvatar>
        );
    }

    if (previewFile) {
        return (
            <AvatarContainer size={size} onClick={onClick}>
                <AvatarImage
                    src={URL.createObjectURL(previewFile)}
                    alt={UserData?.name}
                />
            </AvatarContainer>
        );
    }

    return (
        <AvatarContainer size={size} onClick={onClick}>
            <AvatarImage
                src={avatarUrl}
                alt={currentUserName}
            />
        </AvatarContainer>
    );
};

export default Avatar;