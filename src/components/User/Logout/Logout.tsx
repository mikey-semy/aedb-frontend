import { useNavigate } from "react-router-dom";
import { MdLogout} from 'react-icons/md';
import { LogoutButton } from './Logout.styles';

const Logout: React.FC = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        navigate('/login');
    };

    return (
        <LogoutButton onClick={handleLogout}>
            <MdLogout />
        </LogoutButton>
    );
};
export default Logout;