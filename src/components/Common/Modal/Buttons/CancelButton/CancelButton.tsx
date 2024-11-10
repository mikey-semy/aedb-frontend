import React from 'react';
import { Button } from '../../../../../components';
import { MdCancel } from 'react-icons/md';
import { CancelButtonContainer, CancelButtonIcon } from './CancelButton.styles';
import { CancelButtonTypes } from './CancelButton.types';

const CancelButton: React.FC<CancelButtonTypes> = ({ onClick }) => {

    return (
        <Button
            as={CancelButtonContainer}
            iconAs={CancelButtonIcon}
            icon={MdCancel}
            title="Отмена"
            onClick={onClick}
        />
    );
};
export default CancelButton;