import styled from "styled-components";

import {
    FormLogin,
    FormLoginTopAction,
    FormLoginAction,
    LoginTitle,
    LoginButton,
    LoginButtonIcon,
    LoginToResetPasswordButton,
    ErrorContainer,
    EmptyContainer,
    InputHint
} from '../Login/Login.styles';

export const ResetPasswordForm = styled(FormLogin)``;

export const ResetPasswordFormTopAction = styled(FormLoginTopAction)``;

export const ResetPasswordFormAction = styled(FormLoginAction)``;

export const ResetPasswordTitle = styled(LoginTitle)`
    font-size: 20px;
    font-family: var(--font-default);
`;

export const ResetPasswordButton = styled(LoginButton)``;

export const ResetPasswordButtonIcon = styled(LoginButtonIcon)``;

export const ResetPasswordEmptyContainer = styled(EmptyContainer)``;

export const ResetPasswordErrorContainer = styled(ErrorContainer)``;

export const ResetPasswordToLoginButton = styled(LoginToResetPasswordButton)``;

export const ResetPasswordInputHint = styled(InputHint)``;