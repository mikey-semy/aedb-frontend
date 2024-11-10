import React from 'react';
import { useSidebar } from '../../../../contexts';
import { MdChevronLeft } from 'react-icons/md';
import { CollapseButtonContainer, CollapseButtonIcon } from './CollapseButton.styles';
import { CollapseButtonTypes } from './CollapseButton.types';

const CollapseButton: React.FC<CollapseButtonTypes> = ({ isCollapsed }) => {
    const { toggleSidebar } = useSidebar();

    return (
        <CollapseButtonContainer isCollapsed={isCollapsed} onClick={toggleSidebar}>
            <CollapseButtonIcon isCollapsed={isCollapsed}>
                <MdChevronLeft />
            </CollapseButtonIcon>
        </CollapseButtonContainer>
    );
};
export default CollapseButton;