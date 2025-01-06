import { useNavigate } from "react-router-dom";
import { ProfileButtonContainer, ProfileButtonTitle, ProfileButtonIcon } from './ProfileButton.styles';
import { CgProfile } from 'react-icons/cg';
import { ProfileButtonTypes } from './ProfileButton.types';

const ProfileButton: React.FC<ProfileButtonTypes> = ({ onClose }) => {
    const navigate = useNavigate();
    const handleProfile = () => {
            navigate('/profile');
            onClose();
        };
    return (
        <ProfileButtonContainer onClick={handleProfile}>
            <ProfileButtonIcon>
                <CgProfile size={20} />
            </ProfileButtonIcon>
            <ProfileButtonTitle>
                Профиль
            </ProfileButtonTitle>
        </ProfileButtonContainer>
    );
};

export default ProfileButton;