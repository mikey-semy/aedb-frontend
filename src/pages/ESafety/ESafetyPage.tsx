import React, {useEffect} from 'react';
import { ESafetyPageContainer } from './ESafetyPage.styles';
import DocumentsList from './Documents/Documents';
import TestsList from './Tests/Tests';
import QuestionsList from './Questions/Questions';
import { MdQuiz } from 'react-icons/md';
import { useContentData } from '../../contexts';

const ESafety: React.FC = () => {
  const { setContentData } = useContentData();

  useEffect(() => {
    setContentData({
        caption: 'Электробезопасность',
        title: 'Добавить',
        icon: MdQuiz,
        onClick: () => console.log('Добавить'),
    });
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