import React, {useEffect} from 'react';
import { ESafetyPageContainer } from './ESafetyPage.styles';
import DocumentsList from './Documents/Documents';
import TestsList from './Tests/Tests';
import QuestionsList from './Questions/Questions';

import { useContentData } from '../../contexts';

const ESafety: React.FC = () => {
  const { setContentData } = useContentData();

  useEffect(() => {
    setContentData({ caption: 'Электробезопасность', buttonTitle: 'Добавить' }); 
  }, [setContentData]);

  return (
    <ESafetyPageContainer>
      <DocumentsList />
      <TestsList />
      <QuestionsList />
    </ESafetyPageContainer>
  );
};

export default ESafety;