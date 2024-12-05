import { useNavigate } from "react-router-dom";
import { MdLogout} from 'react-icons/md';
import { LogoutButton } from './Logout.styles';
import { useAuth } from '@/contexts';

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const { setUser, setToken } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setToken('');
        navigate('/login');
    };

    return (
        <LogoutButton onClick={handleLogout}>
            <MdLogout />
        </LogoutButton>
    );
};
export default Logout;