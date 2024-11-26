import React from 'react';
import { LoadingContainer } from './Loading.styles';
import { BeatLoader } from 'react-spinners';

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <BeatLoader />
        </LoadingContainer>
    );
}
export default Loading;