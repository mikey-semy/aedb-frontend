
import { errorMessages } from './Error.data';
import { ErrorTypes } from './Error.types';
import {
    ErrorContainer,
    ErrorTitle,
    ErrorText,
    ErrorMessage
} from "./Error.styles";

const Error: React.FC<ErrorTypes> = ({ error }) => {
    let errorMessage;

    if (!navigator.onLine) {
        errorMessage = "Пожалуйста, проверьте ваше интернет-соединение.";
    } else if (error) {
        errorMessage = `${error.message || 'Неизвестная ошибка'}${error.status ? ` (Статус: ${error.status})` : ''}`;
    } else {
        errorMessage = errorMessages.description || "Неизвестная ошибка";
    }

    return (
        <ErrorContainer>
            <ErrorTitle>{errorMessages.icon}</ErrorTitle>
            <ErrorText>{errorMessages.title}</ErrorText>
            <ErrorText>
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            </ErrorText>
        </ErrorContainer>
    );
};

export default Error;
