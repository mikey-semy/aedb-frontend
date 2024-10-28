import React, { useState } from 'react';
import ModalWrapper from '../../common/modal/ModalWrapper';
import Button from '../../common/form/Button';
import FormCreateUser from '../Forms/CreateUserForm';
import { createUser as apiCreateUser } from '../../../api';
import { NewUser } from '../../../types/users/users';

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
        className="button__icon button__icon-create-user"
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