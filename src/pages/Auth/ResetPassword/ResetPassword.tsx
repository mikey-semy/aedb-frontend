import React from 'react';
import { ResetPasswordContainer } from './ResetPassword.styles';
import { ResetPassword as ResetPasswordForm } from '@/components';

const ResetPassword: React.FC = () => {
    return (
        <ResetPasswordContainer>
            <ResetPasswordForm />
        </ResetPasswordContainer>
    );
};

export default ResetPassword;