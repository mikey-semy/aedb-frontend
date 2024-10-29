import React from 'react';
import { ESafetyPageContainer } from './ESafetyPage.styles';
import DocumentsList from './Documents/Documents';
import TestsList from './Tests/Tests';
import QuestionsList from './Questions/Questions';


const ESafety: React.FC = () => {
  return (
    <ESafetyPageContainer>
      <DocumentsList />
      <TestsList />
      <QuestionsList />
    </ESafetyPageContainer>
  );
};

export default ESafety;