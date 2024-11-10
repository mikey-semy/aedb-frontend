import api, { handleApiResponse, handleApiError}  from '@/api';
import { CategoryTypes } from './Categories/Category.types'; //! Создать новый тип

export const getManuals = (): Promise<CategoryTypes[]> =>
    api.get<CategoryTypes[]>('/api/v1/manuals/nested')
        .then(handleApiResponse)
        .catch(handleApiError);