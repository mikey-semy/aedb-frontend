import { useRouteError } from "react-router-dom";
import { Error } from "@/components";
import { RouteError } from './ErrorPage.types';

export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as RouteError;
    
    console.error(error);

    return (
        
        <Error error={error} />
    );
}