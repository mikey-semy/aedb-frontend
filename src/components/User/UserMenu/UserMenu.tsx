import { useState } from 'react';
import { UserMenuContainer, Menu, MenuItem } from './user-menu.styles';
import { Avatar, ProfileButton, LogoutButton } from '@/components';

const UserMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <UserMenuContainer>
            <Avatar
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