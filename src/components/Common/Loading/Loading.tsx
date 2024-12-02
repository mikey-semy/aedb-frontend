import React from 'react';
import { LoadingContainer } from './Loading.styles';
import { BeatLoader } from 'react-spinners';
import { useTheme } from '@/contexts';

const Loading: React.FC = () => {
    const { isDark } = useTheme();
    return (
        <LoadingContainer>
            <BeatLoader 
                color={isDark ? '#c9d1d9' : '#24292f'} 
                size={15}
            />
        </LoadingContainer>
    );
}
export default Loading;