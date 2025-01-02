export interface RouteError {
    message?: string;
    statusText?: string;
    status?: number;
}

export interface ErrorTypes {
    error?: RouteError;
}

export interface ErrorMessages {
    icon: string;
    title: string;
    description: string;
}