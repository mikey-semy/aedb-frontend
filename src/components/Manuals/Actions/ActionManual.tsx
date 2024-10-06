import React from 'react';
import ModalUpdateManual from '../Modals/ModalUpdateManual';
import ModalRemoveManual from '../Modals/ModalRemoveManual';

interface ActionManualsProps {
  manual: {
    id: number;
    title: string;
    file_url: string;
    group_id: number;
  } 
}
const ActionManuals: React.FC<ActionManualsProps> = ({ manual }) => {
  const handleUpdateItems = () => {
    // Логика для обновления элементов, например, запрос к серверу
  };
    return ( 
      <div className='manual__action'>
        <ModalUpdateManual manual={manual} onSuccess={handleUpdateItems} />
        <ModalRemoveManual manualId={manual.id} onSuccess={handleUpdateItems} />
      </div>
    );
};

export default ActionManuals;