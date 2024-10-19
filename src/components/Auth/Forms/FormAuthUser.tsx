import React, { useState, useEffect } from 'react';
import FormAction from '../../common/Form/Action';
import { User } from '../../../types/users/users';
interface FormAuthUserProps {
    onSubmit: (auth_user: User) => void;
    onCancel: () => void;
  }

const FormAuthUser: React.FC<FormAuthUserProps> = ({ onSubmit, onCancel }) => {
    const [error, setError] = useState<string | null>(null);
    const [auth_user, setAuthUser] = React.useState<User>({
        name: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuthUser(prev => ({ ...prev, [name]: value }));
        if (error) setError(null); // Очистить ошибку при изменении ввода
    };

const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (auth_user.name && auth_user.password) {
            setError(null);
            onSubmit(auth_user);
        } else {
            setError('Пожалуйста, введите имя и пароль');
        }
    };

  return (
    <form className='form form--auth-user' onSubmit={handleSubmit}>
            <label htmlFor="name">
                Имя:
            </label>
            <input 
                type="text" 
                name="name" 
                value={auth_user.name} 
                onChange={handleChange} 
            />
            <br />
            <label htmlFor="password">
                Пароль:
            </label>
            <input 
                type="password" 
                name="password" 
                value={auth_user.password} 
                onChange={handleChange} 
            />
            <br />
            <FormAction 
                onRequestCancel={onCancel} 
                contentCancel={{icon: '', title: 'Отмена'}} 
                contentSubmit={{icon: '', title: 'Войти'}}
                disabled={!!error}
            />

            {error && <div className="error-message">{error}</div>}
        </form>
  );
};

export default FormAuthUser;