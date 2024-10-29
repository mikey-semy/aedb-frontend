import React from 'react';
import ModalUpdateManual from '../Modals/ModalUpdateManual';
import ModalRemoveManual from '../Modals/ModalRemoveManual';
import { ManualTypes } from '../Manuals/Manual.types';
import { CategoryTypes } from '../Categories/Category.types';

interface ActionManualsProps {
  category: CategoryTypes;
  manual: ManualTypes;
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
        //! Временный костыль с ?? 0 - из-за объединения типа ManualTypes с ...Nested...
        <ModalRemoveManual manualId={manual.id ?? 0} onSuccess={handleUpdateItems} /> 
      </div>
    );
};

export default ActionManuals;