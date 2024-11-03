import React from 'react';
import { Button } from '../../../../components';
import { useSidebar } from '../../../../contexts';
import { MdChevronLeft } from 'react-icons/md';
import { CollapseButtonContainer, CollapseButtonIcon } from './CollapseButton.styles';
import { CollapseButtonTypes } from './CollapseButton.types';

const ButtonWithCollapseType = Button as React.ComponentType<CollapseButtonTypes>;

const CollapseButton: React.FC<CollapseButtonTypes> = ({ isCollapsed }) => {
    const { toggleSidebar } = useSidebar();

    return (
        <ButtonWithCollapseType
            as={CollapseButtonContainer}
            iconAs={CollapseButtonIcon}
            onClick={toggleSidebar}
            icon={MdChevronLeft}
            isCollapsed={isCollapsed}
        />
    );
};
export default CollapseButton;