import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormLogin,
    FormLoginTopAction,
    FormLoginAction,
    LoginTitle,
    LoginButton,
    LoginButtonIcon,
    LoginToResetPasswordButton,
    AttemptsContainer,
    ErrorContainer,
    EmptyContainer,
    InputHint
} from './Login.styles';
import { ThemeButton } from '@/components';
import { LoginForm } from './Login.types';
import { login } from './Login.api';
import { Input, Button } from '@/components';
import { useAuth } from '@/contexts';
import { ApiError } from '@/utils/apiUtils';


const Login = () => {
    const navigate = useNavigate();
    const { setUser, setToken } = useAuth();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<LoginForm>({
        username: '',
        password: ''
    });

    const MAX_ATTEMPTS = 5; // Максимальное количество попыток
    const BLOCK_TIME = 300000; // 5 минут
    const [attempts, setAttempts] = useState(() =>
        Number(localStorage.getItem('loginAttempts')) || 0
    );
    const [remainingTimeDisplay, setRemainingTimeDisplay] = useState<string>('');
    const [isBlocked, setIsBlocked] = useState(() => {
        const blockUntil = localStorage.getItem('blockUntil');
        if (blockUntil && Number(blockUntil) > Date.now()) {
            return true;
        }
        return false;
    });

    const block = () => {
        setIsBlocked(true);
        const blockUntil = Date.now() + BLOCK_TIME;
        localStorage.setItem('blockUntil', String(blockUntil));
        const remainingTime = Math.ceil((blockUntil - Date.now()) / 1000);
        setError(`Повторите попытку через ${remainingTime} секунд`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setError('');

        if (!formData.username || !formData.password) {
            return;
        }

        if (isBlocked) {
            setError('Слишком много попыток. Попробуйте позже');
            return;
        }

        try {
            const response = await login({
                username: formData.username,
                password: formData.password
            });
            setUser(response.user);
            setToken(response.access_token);
            setAttempts(0);
            setError('');
            localStorage.setItem('loginAttempts', '0');
            navigate('/');
        } catch (err: unknown) {
            e.preventDefault();

            const apiError = err as ApiError;

            if (apiError.error_type === 'invalid_credentials') {
                setError('Неверный пароль');
            } else {
                setError(apiError.detail || apiError.message || 'Ошибка авторизации');
            }

            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            localStorage.setItem('loginAttempts', String(newAttempts));

            if (newAttempts >= MAX_ATTEMPTS) {
                block();
            }
        }
    };

    useEffect(() => {
        const checkBlockStatus = () => {
            const blockUntil = localStorage.getItem('blockUntil');
            if (blockUntil) {
                const remaining = Number(blockUntil) - Date.now();
                if (remaining <= 0) {
                    setIsBlocked(false);
                    setError('');
                    setAttempts(0);
                    setRemainingTimeDisplay('');
                    localStorage.removeItem('blockUntil');
                    localStorage.setItem('loginAttempts', '0');
                } else {
                    setIsBlocked(true);
                    const remainingSeconds = Math.ceil(remaining / 1000);
                    setRemainingTimeDisplay(`Попробуйте через ${remainingSeconds} секунд`);
                }
            }
        };

        checkBlockStatus();
        const interval = setInterval(checkBlockStatus, 100);
        return () => clearInterval(interval);
    }, []);

    return (
            <FormLogin onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
                }} hasError={!!error}>
                <FormLoginTopAction>
                    <ThemeButton/>
                </FormLoginTopAction>

                <LoginTitle>AEDB Access</LoginTitle>
                <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    placeholder="Имя пользователя"
                    hasError={error?.includes('существует')}
                    required={false}
                />
                <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Пароль"
                    hasError={error?.includes('пароль')}
                    required={false}
                />
                {error ? (
                    <ErrorContainer>{error}</ErrorContainer>
                ) : !formData.username ? (
                    <InputHint>Введите имя пользователя</InputHint>
                ) : !formData.password ? (
                    <InputHint>Введите пароль</InputHint>
                ) : (
                    <EmptyContainer />
                )}
                <FormLoginAction>
                    <Button
                        as={LoginButton}
                        iconAs={LoginButtonIcon}
                        type="submit"
                        title="Войти"
                        disabled={isBlocked || !formData.username || !formData.password}
                    />
                    <Button
                        as={LoginToResetPasswordButton}
                        onClick={() => navigate('/reset-password')}
                        title="Забыли пароль?"
                    />
                </FormLoginAction>

                {isBlocked ? (
                    <AttemptsContainer title="Время до следующей попытки">
                        {remainingTimeDisplay.replace('Попробуйте через ', '').replace(' секунд', '')}
                    </AttemptsContainer>
                ) : (
                    attempts > 0 && (
                        <AttemptsContainer title="Количество оставшихся попыток">
                        {MAX_ATTEMPTS - attempts}
                        </AttemptsContainer>
                    )
                )}
            </FormLogin>
    );
};
export default Login;