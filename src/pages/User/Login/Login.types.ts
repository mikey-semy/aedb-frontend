export interface LoginForm {
    username: string; // OAuth2PasswordRequestForm ожидает username, не email
    password: string;
  }

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}