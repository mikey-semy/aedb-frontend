import { useRouteError } from "react-router-dom";
import Header from './components/header/Header';
interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        
        <div id="error-page">
            <Header />
            <h1 className="error__oops">Оопс!</h1>
            <p className="error__sorry">Извините, произошла непредвиденая ошибка :(</p>
            <p>
                <i className="error__message">Ошибка: {error.statusText || error.message}</i>
            </p>
        </div>
    );
}
