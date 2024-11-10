import { useState } from 'react';
import { LoginForm } from './Login.types';
import { login } from './Login.api';

export const Login = () => {
    const [formData, setFormData] = useState<LoginForm>({
        username: '',
        password: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({
            username: formData.username,
            password: formData.password
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder="Username"
            />
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Password"
            />
            <button type="submit">Войти</button>
        </form>
    );
};
