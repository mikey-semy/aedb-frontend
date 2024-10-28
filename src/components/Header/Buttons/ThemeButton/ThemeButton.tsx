import {
    ThemeButtonContainer,
    ThemeButtonIcon
} from './ThemeButton.styles';
import { ThemeButtonProps } from "./ThemeButton.types";

export const ThemeButton: React.FC<ThemeButtonProps> = ({
    icon: Icon,
    ...props
}) => (
    <ThemeButtonContainer
        {...props}
    >
        <ThemeButtonIcon>
            {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)}
        </ThemeButtonIcon>
    </ThemeButtonContainer>
);