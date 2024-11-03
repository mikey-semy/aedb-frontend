import { ButtonTypes } from '../../../Button/Button.types';

export interface SubmitButtonTypes extends ButtonTypes {
    onClick?: ButtonTypes['onClick'];
}