import api, { handleApiResponse, handleApiError}  from '@/api';
import { 
    Message 
} from './Messenger.types';

export const getMessageAPI = (): Promise<Message> =>
    api.get<Message>('/api/v1/messenger')
        .then(handleApiResponse)
        .catch(handleApiError);

export const sendMessageAPI = (newMessage: Message): Promise<Message> =>
    api.post<Message>('/api/v1/messenger', newMessage)
        .then(handleApiResponse)
        .catch(handleApiError);