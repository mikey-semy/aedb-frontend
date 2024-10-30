import {
    AddButtonContainer,
    AddButtonIcon,
    AddButtonTitle
} from './AddButton.styles';
import { AddButtonTypes } from "./AddButton.types";

export const AddButton: React.FC<AddButtonTypes> = ({
    icon: Icon,
    title: string,
    ...props
}) => (
    <AddButtonContainer
        {...props}
    >
        <AddButtonTitle>{string}</AddButtonTitle>
        <AddButtonIcon>
            {Icon && (typeof Icon === 'function' ? <Icon /> : Icon)} 
            
        </AddButtonIcon>
    </AddButtonContainer>
);