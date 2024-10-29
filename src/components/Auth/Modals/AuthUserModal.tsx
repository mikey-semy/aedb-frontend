import React, { useState } from 'react';

import FormAuthUser from '../Forms/AuthUserForm';

import ModalWrapper from '../../Common/Modal/ModalWrapper';
import Button from '../../Common/Button/Button';

import { authUser as apiAuthUser } from '../Auth.api';
import { User } from '../Auth.types';

interface ModalAuthUserProps {
  onSuccess: () => void;
}

const ModalAuthUser: React.FC<ModalAuthUserProps> = ({ onSuccess }) => {
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
  const handleSubmit = async (auth_user: User) => {

    try {
      await apiAuthUser(auth_user);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при авторизации пользователя:', error);
      setErrorMessage('Ошибка при авторизации. Пожалуйста, попробуйте еще раз.');
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
        title="Авторизация пользователя"
      >
        {errorMessage && <div className="error-message">{errorMessage}</div>} 
          <FormAuthUser 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} 
            />
      </ModalWrapper>
      </>
  );
};

export default ModalAuthUser;