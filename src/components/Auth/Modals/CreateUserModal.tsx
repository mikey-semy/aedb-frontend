import React, { useState } from 'react';

import FormCreateUser from '../Forms/CreateUserForm';

import ModalWrapper from '../../Common/Modal/Modal';
import Button from '../../Common/Button/Button';

import { createUser as apiCreateUser } from '../Auth.api';
import { NewUser } from '../Auth.types';

interface ModalCreateUserProps {
  onSuccess: () => void;
}

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({ onSuccess }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const openModal = () => {
        setIsModalOpen(true);
        setErrorMessage(null);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        closeModal();
    };
    const handleSubmit = async (new_user: NewUser) => {

        try {
            await apiCreateUser(new_user);
            closeModal();
            onSuccess(); 
        } catch (error) {
            console.error('Ошибка при создании пользователя:', error);
            setErrorMessage('Ошибка при cоздании пользователя. Пожалуйста, попробуйте еще раз.');
        }
    };
  
  return (
    <>
      <Button
        onClick={openModal}
      />
      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Создать пользователя"
      >
        {errorMessage && <div className="error-message">{errorMessage}</div>} 
          <FormCreateUser 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} />
      </ModalWrapper>
      </>
  );
};

export default ModalCreateUser;