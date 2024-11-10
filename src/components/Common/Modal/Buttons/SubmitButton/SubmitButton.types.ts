import { ButtonTypes } from '@/components/Common/Button/Button.types';

export interface SubmitButtonTypes extends ButtonTypes {
    onClick?: ButtonTypes['onClick'];
}