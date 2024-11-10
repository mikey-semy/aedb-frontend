import {
    ContentHeaderButtonContainer,
    ContentHeaderButtonIcon,
    ContentHeaderButtonTitle
} from './ContentHeaderButton.styles';
import { ContentHeaderButtonTypes } from "./ContentHeaderButton.types";
import { Button } from '@/components';
export const ContentHeaderButton: React.FC<ContentHeaderButtonTypes> = (
    { icon, title, onClick }
) => {
    return (
        <Button
            as={ContentHeaderButtonContainer}
            iconAs={ContentHeaderButtonIcon}
            titleAs={ContentHeaderButtonTitle}
            icon={icon}
            title={title}
            onClick={onClick}
        />
    )
};