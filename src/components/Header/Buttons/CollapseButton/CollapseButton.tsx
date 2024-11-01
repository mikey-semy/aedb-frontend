import {
    CollapseButtonContainer,
    CollapseButtonIcon
} from './CollapseButton.styles';
import { CollapseButtonProps } from "./CollapseButton.types";

export const CollapseButton: React.FC<CollapseButtonProps> = ({
    isCollapsed,
    icon: Icon,
    ...props
}) => (
    <CollapseButtonContainer
        isCollapsed={isCollapsed}
        {...props}
    >
        <CollapseButtonIcon isCollapsed={isCollapsed}>
            {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)}
        </CollapseButtonIcon>
    </CollapseButtonContainer>
);