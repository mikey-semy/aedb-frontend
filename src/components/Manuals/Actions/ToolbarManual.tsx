import React from 'react';
import ModalAddManual from '../Modals/ModalAddManual';

const ToolbarManuals: React.FC = () => {
  const handleUpdateItems = () => {
    // Логика для обновления элементов, например, запрос к серверу
  };
  return (
    <div className='manual__toolbar'>
      <ModalAddManual onSuccess={handleUpdateItems}/>
    </div>
  );
};
export default ToolbarManuals;