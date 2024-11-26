export interface RouteError {
    statusText?: string;
    message?: string;
}

export interface ErrorTypes {
    error?: RouteError;
    errorMessage?: string;
}

export interface ErrorMessages {
    icon: string;
    title: string;
    description: string;
}