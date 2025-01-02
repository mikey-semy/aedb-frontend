import React/*, { useState } */from 'react';
import { LoginContainer } from './Login.styles';
import { Login as LoginForm/*, ResetPassword as ResetPasswordForm */} from '@/components';



const Login: React.FC = () => {
    // const [currentView, setCurrentView] = useState<'login' | 'reset'>('login');

    return (
        <LoginContainer>
            <LoginForm />
            {/* {currentView === 'login' ? (
                <LoginForm onResetClick={() => setCurrentView('reset')} />
            ) : (
                <ResetPasswordForm onBackClick={() => setCurrentView('login')} />
            )} */}
        </LoginContainer>
    );
};

export default Login;