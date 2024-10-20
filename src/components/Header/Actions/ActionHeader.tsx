import React from 'react';
import ModalAuthUser from '../../Main/Modals/ModalAuthUser';
import ModalCreateUser from '../../Main/Modals/ModalCreateUser';

interface ActionHeaderProps {
  onUpdate: () => void;
}
const ActionHeader: React.FC<ActionHeaderProps> = ({ onUpdate }) => {
  const handleUpdateItems = () => {
    try { 
      onUpdate();
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };
    return ( 
      <div className='app-header__action'>
        <ModalAuthUser onSuccess={handleUpdateItems} />
        <ModalCreateUser onSuccess={handleUpdateItems} />
      </div>
    );
};

export default ActionHeader;