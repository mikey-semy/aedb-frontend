import React from 'react';
import ModalUpdateManual from '../Modals/ModalUpdateManual';
import ModalRemoveManual from '../Modals/ModalRemoveManual';

const ActionManuals: React.FC = () => {

    return (
      <div className='manual__action'>
        <ModalUpdateManual />
        <ModalRemoveManual />
      </div>
    );
};
export default ActionManuals;