import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { LogoutButtonContainer, LogoutButtonTitle, LogoutButtonIcon } from './LogoutButton.styles';
import { useAuth } from '@/contexts';
import { logout } from "./LogoutButton.api";

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();
    const { setUser, setToken } = useAuth();

    const handleLogout = () => {
        // По API удаляем токен из Redis,
        // возвращаем сообщение об успешном выходе:
        // {"message": "Выход выполнен успешно!"}
        logout();
        // Удаляем токен из localStorage
        localStorage.removeItem('token');
        // Удаляем данные пользователя из контекста
        setUser(null);
        // Удаляем токен из контекста
        setToken('');
        // Переходим на страницу входа
        navigate('/login');
    };

    return (
        <LogoutButtonContainer onClick={handleLogout}>
            <LogoutButtonIcon>
                <IoExitOutline size={20}/>
            </LogoutButtonIcon>
            <LogoutButtonTitle>
                Выйти
            </LogoutButtonTitle>
        </LogoutButtonContainer>
    );
};
export default LogoutButton;