import React from 'react';
import ModalAddManual from '../modals/ModalAddManual';

interface ToolbarManualsProps {
  onUpdate: () => void;
}

const ToolbarManuals: React.FC<ToolbarManualsProps> = ({ onUpdate }) => {
  const handleUpdateItems = () => {
    // Логика для обновления элементов, например, запрос к серверу
    try {
      // Предположим, у вас есть API-запрос для обновления мануала
      // await updateManual(manual.id); // Замените на вашу фактическую логику обновления
      onUpdate(); // Вызовите функцию для обновления данных
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };
  return (
    <div className='manual__toolbar'>
      <ModalAddManual onSuccess={handleUpdateItems}/>
    </div>
  );
};
export default ToolbarManuals;