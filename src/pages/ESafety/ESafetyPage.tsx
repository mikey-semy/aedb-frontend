import React, {useEffect} from 'react';
import DocumentsList from './Documents/Documents';
import TestsList from './Tests/Tests';
import QuestionsList from './Questions/Questions';
import { MdQuiz } from 'react-icons/md';
import { useContentData } from '../../contexts';
import { Tabs } from '../../components';
import { TestsData } from './Tests/Tests.data';

const ESafety: React.FC = () => {
  const { setContentData } = useContentData();

  const handleLinkClick = () => {
    window.open(TestsData[0].link, '_blank');
  };

  useEffect(() => {
    setContentData({
        caption: 'Электробезопасность',
        title: 'Экзамен',
        icon: MdQuiz,
        onClick: () => handleLinkClick(),
    });
}, [setContentData]);

  return (
    <Tabs tabs={[
      { label: 'Документы', content: <DocumentsList /> }, 
      { label: 'Тесты', content: <TestsList /> }, 
      { label: 'Вопросы', content: <QuestionsList /> }
    ]} />
  );
};

export default ESafety;