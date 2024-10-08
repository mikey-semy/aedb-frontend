import React from 'react';
import ModalUpdateManual from '../Modals/ModalUpdateManual';
import ModalRemoveManual from '../Modals/ModalRemoveManual';

interface ActionManualsProps {
  manual: {
    id: number;
    title: string;
    file_url: string;
    group_id: number;
  };
  onUpdate: () => void;
}
const ActionManuals: React.FC<ActionManualsProps> = ({ manual, onUpdate }) => {
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
      <div className='manual__action'>
        <ModalUpdateManual manual={manual} onSuccess={handleUpdateItems} />
        <ModalRemoveManual manualId={manual.id} onSuccess={handleUpdateItems} />
      </div>
    );
};

export default ActionManuals;