import {
    ContentHeaderButtonContainer,
    ContentHeaderButtonIcon,
    ContentHeaderButtonTitle
} from './ContentHeaderButton.styles';
import { ContentHeaderButtonTypes } from "./ContentHeaderButton.types";

export const ContentHeaderButton: React.FC<ContentHeaderButtonTypes> = ({
    onClick,
    icon: Icon,
    title: string,
    ...props
}) => (
    <ContentHeaderButtonContainer
        {...props}
    >
        <ContentHeaderButtonTitle>{string}</ContentHeaderButtonTitle>
        <ContentHeaderButtonIcon>
            {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)} 
        </ContentHeaderButtonIcon>
    </ContentHeaderButtonContainer>
);