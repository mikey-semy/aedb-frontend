import React from 'react';
import { Button } from '@/components';
import { MdClose } from 'react-icons/md';
import { CloseButtonContainer, CloseButtonIcon } from './CloseButton.styles';
import { CloseButtonTypes } from './CloseButton.types';

const CloseButton: React.FC<CloseButtonTypes> = ({ onClick }) => {

    return (
        <Button
            as={CloseButtonContainer}
            iconAs={CloseButtonIcon}
            icon={ MdClose }
            onClick={onClick}
        />
    );
};
export default CloseButton;