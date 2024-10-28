import { useRouteError } from "react-router-dom";
import { errorMessages } from './ErrorPage.data';
import { RouteError } from './ErrorPage.types';
import {
    ErrorPageContainer,
    ErrorPageTitle,
    ErrorPageText,
    ErrorPageMessage
} from "./ErrorPage.styles";

export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <ErrorPageContainer>
            <ErrorPageTitle>{errorMessages.oops}</ErrorPageTitle>
            <ErrorPageText>{errorMessages.sorry}</ErrorPageText>
            <ErrorPageText>
                <ErrorPageMessage>
                    {errorMessages.error} {error.statusText || error.message}
                </ErrorPageMessage>
            </ErrorPageText>
        </ErrorPageContainer>
    );
}