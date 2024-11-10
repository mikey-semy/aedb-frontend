import { useState } from 'react';
import { RegisterForm } from './Register.types';
import { register } from './Register.api';

const Register = () => {
    const [formData, setFormData] = useState<RegisterForm>({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register({
            username: formData.username,
            password: formData.password,
            email: formData.email
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder="Name"
            />
            <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Email"
            />
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Password"
            />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};
export default Register;