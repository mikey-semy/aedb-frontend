import {
    ThemeButtonContainer,
    ThemeButtonIcon
} from './ThemeButton.styles';
import { ThemeButtonProps } from "./ThemeButton.types";

export const ThemeButton: React.FC<ThemeButtonProps> = ({
    isCollapsed,
    icon: Icon,
    ...props
}) => (
    <ThemeButtonContainer
        isCollapsed={isCollapsed}
        {...props}
    >
        <ThemeButtonIcon>
            {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)}
        </ThemeButtonIcon>
    </ThemeButtonContainer>
);