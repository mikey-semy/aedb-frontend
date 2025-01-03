import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ResetPasswordForm,
    ResetPasswordFormTopAction,
    ResetPasswordFormAction,
    ResetPasswordTitle,
    ResetPasswordButton,
    ResetPasswordButtonIcon,
    ResetPasswordToLoginButton,
    ResetPasswordInputHint as InputHint,
    ResetPasswordErrorContainer as ErrorContainer,
    ResetPasswordEmptyContainer as EmptyContainer
} from './ResetPassword.styles';
import { ThemeButton, Input, Button } from '@/components';
import { resetPassword } from './ResetPassword.api';
import { ApiError } from '@/utils';


const ResetPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await resetPassword({ email });
            setIsSuccess(true);
        } catch (err: unknown) {
            const apiError = err as ApiError;
            setError(apiError.detail || 'Ошибка восстановления пароля');
        }
    };

    return (
        <ResetPasswordForm onSubmit={handleSubmit} $hasError={!!error}>
            <ResetPasswordFormTopAction>
                <ThemeButton/>
            </ResetPasswordFormTopAction>

            <ResetPasswordTitle>Куда отправить пароль?</ResetPasswordTitle>

            {!isSuccess ? (
                <>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        $hasError={!!error}
                        required={false}
                    />
                    {error ? (
                        <ErrorContainer>{error}</ErrorContainer>
                    ) : email ? (
                        <EmptyContainer />
                    ) : (
                        <InputHint>Введите email для восстановления пароля</InputHint>
                    )}
                    <ResetPasswordFormAction>
                        <Button
                            as={ResetPasswordButton}
                            iconAs={ResetPasswordButtonIcon}
                            type="submit"
                            title="Отправить"
                            disabled={true}
                        />
                        <Button
                            as={ResetPasswordToLoginButton}
                            onClick={() => navigate('/login')}
                            title="Нет, не забыл"
                        />
                    </ResetPasswordFormAction>
                </>
            ) : (
                <>
                    <div>Новый пароль отправлен на email</div>
                    <Button
                        onClick={() => navigate('/login')}
                        title="Хорошо"
                    />
                </>
            )}
        </ResetPasswordForm>
    );
};
export default ResetPassword;