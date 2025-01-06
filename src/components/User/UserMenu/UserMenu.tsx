import { useState, useRef, useEffect } from 'react';
import { UserMenuContainer, Menu, MenuItem } from './UserMenu.styles';
import { Avatar, ProfileButton, LogoutButton } from '@/components';

const UserMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <UserMenuContainer ref={menuRef}>
            <Avatar
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
                <Menu>
                    <MenuItem>
                        <ProfileButton onClose={() => setIsMenuOpen(false)}/>
                    </MenuItem>
                    <MenuItem>
                        <LogoutButton onClose={() => setIsMenuOpen(false)}/>
                    </MenuItem>
                </Menu>
            )}
        </UserMenuContainer>
    );
};

export default UserMenu;