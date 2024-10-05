import React from 'react';
import ModalUpdateManual from '../Modals/ModalUpdateManual';
import ModalRemoveManual from '../Modals/ModalRemoveManual';

const ToolbarManuals: React.FC = () => {

    return (
      <div className='manual__action'>
        <ModalUpdateManual />
        <ModalRemoveManual />
      </div>
    );
};
export default ToolbarManuals;