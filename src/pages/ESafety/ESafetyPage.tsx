import React, {useEffect} from 'react';
import { ESafetyPageContainer } from './ESafetyPage.styles';
import DocumentsList from './Documents/Documents';
import TestsList from './Tests/Tests';
import QuestionsList from './Questions/Questions';
import { MdQuiz } from 'react-icons/md';
import { useContentData } from '../../contexts';
import { ContentContextTypes } from '../../contexts/Content/ContentContext.types'; 
const ESafety: React.FC = () => {
  const { setContentData } = useContentData();

  useEffect(() => {
    setContentData((prevState) => ({
      ...prevState, // Сохраняем предыдущее состояние
      contentData: { // Обновляем только contentData
        caption: 'Электробезопасность',
        title: 'Добавить',
        icon: MdQuiz,
        onClick: () => console.log('Добавить'),
      },
    } as ContentContextTypes));
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