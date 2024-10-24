import React from 'react';
import ModalUpdateManual from '../modals/ModalUpdateManual';
import ModalRemoveManual from '../modals/ModalRemoveManual';
import { CategoryItem, ManualItem } from '../../../types/manuals/nestedManuals';
interface ActionManualsProps {
  category: CategoryItem;
  manual: ManualItem;
  onUpdate: () => void;
}
const ActionManuals: React.FC<ActionManualsProps> = ({ category, manual, onUpdate }) => {
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
        <ModalUpdateManual category={category} manual={manual} onSuccess={handleUpdateItems} />
        <ModalRemoveManual manualId={manual.id} onSuccess={handleUpdateItems} />
      </div>
    );
};

export default ActionManuals;