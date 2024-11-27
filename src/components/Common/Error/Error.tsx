
import { errorMessages } from './Error.data';
import { ErrorTypes } from './Error.types';
import {
    ErrorContainer,
    ErrorTitle,
    ErrorText,
    ErrorMessage
} from "./Error.styles";

const Error: React.FC<ErrorTypes> = ({ error }) => {
    
    return (
        <ErrorContainer>
            <ErrorTitle>{errorMessages.icon}</ErrorTitle>
            <ErrorText>{errorMessages.title}</ErrorText>
            <ErrorText>
                <ErrorMessage>
                    {errorMessages.description} {error?.statusText || error?.message}
                </ErrorMessage>
            </ErrorText>
        </ErrorContainer>
    );
};

export default Error;