import { useNavigate } from "react-router-dom";
import { ProfileButtonContainer, ProfileButtonTitle, ProfileButtonIcon } from './profile-button.styles';
import { CgProfile } from 'react-icons/cg';

const ProfileButton: React.FC = () => {
    const navigate = useNavigate();
    const handleProfile = () => {
            navigate('/profile');
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