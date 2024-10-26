import { useRouteError } from "react-router-dom";
import { errorMessages } from './ErrorPage.data';
import { RouteError } from './ErrorPage.types';
import {
    ErrorContainer,
    ErrorTitle,
    ErrorText,
    ErrorMessage
} from "./ErrorPage.styles";

export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <ErrorContainer>
            <ErrorTitle>{errorMessages.oops}</ErrorTitle>
            <ErrorText>{errorMessages.sorry}</ErrorText>
            <ErrorText>
                <ErrorMessage>
                    {errorMessages.error} {error.statusText || error.message}
                </ErrorMessage>
            </ErrorText>
        </ErrorContainer>
    );
}