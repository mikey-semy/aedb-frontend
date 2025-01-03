import { useEffect, useState } from 'react';
import { UserMenuContainer, Menu, MenuItem } from './user-menu.styles';
import { Avatar, ProfileButton, LogoutButton } from '@/components';
import { useAuth } from '@/contexts';
import { getUserProfile } from '../Profile/Profile.api';

const UserMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { token } = useAuth();
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile(token);
                setUserData(data);
            } catch (err) {
                setError('Ошибка при загрузке профиля');
            }
        };

        fetchProfile();
    }, [token]);

    return (
        <UserMenuContainer>
            <Avatar
                UserData={userData}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
                <Menu>
                    <MenuItem>
                        <ProfileButton />
                    </MenuItem>
                    <MenuItem>
                        <LogoutButton />
                    </MenuItem>
                </Menu>
            )}
        </UserMenuContainer>
    );
};

export default UserMenu;