import React from 'react';
import { LoginContainer } from './Login.styles';
import { Login as LoginForm } from '@/components';

const Login: React.FC = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
};

export default Login;