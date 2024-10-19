import React, { useState, useEffect } from 'react';
import FormAction from '../../common/Form/Action';
import { NewUser } from '../../../types/users/users';

interface FormNewUserProps {
    onSubmit: (new_user: NewUser) => void;
    onCancel: () => void;
  }

const FormCreateUser: React.FC<FormNewUserProps> = ({ onSubmit, onCancel }) => {
    const [error, setError] = useState<string | null>(null);
    const [new_user, setNewUser] = React.useState<NewUser>({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
        if (error) setError(null); // Очистить ошибку при изменении ввода
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (new_user.name && new_user.password && new_user.email) {
            setError(null);
            onSubmit(new_user);
        } else {
            // Обработка ошибки: имя, email или пароль не введены
            setError('Пожалуйста, введите имя, email и пароль');
        }
        
    }

    return (
        <form className='form form--create-user' onSubmit={handleSubmit}>
            <label htmlFor="name">Имя:</label>
            <input 
                type="text" 
                name="name" 
                value={new_user.name} 
                onChange={handleChange} 
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                name="email" 
                value={new_user.email} 
                onChange={handleChange} 
            />
            <br />
            <label htmlFor="password">Пароль:</label>
            <input 
                type="password" 
                name="password" 
                value={new_user.password} 
                onChange={handleChange} 
            />
            <br />
            <FormAction 
                onRequestCancel={onCancel} 
                contentCancel={{icon: '', title: 'Отмена'}} 
                contentSubmit={{icon: '', title: 'Создать'}}
                disabled={!!error}
            />

            {error && <div className="error-message">{error}</div>}
        </form>
    );
};

export default FormCreateUser;