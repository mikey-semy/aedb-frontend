import React, {useEffect}  from 'react';
import { useContentData } from '@/contexts';
import { MdAdd } from 'react-icons/md';

const Dashboard: React.FC = () => {
  const { setContentData } = useContentData();
  useEffect(() => {
    setContentData({
      caption: 'Главный экран',
      title: 'Создать виджет',
      icon: MdAdd,
      onClick: () => console.log('click'),
    });
  }, [setContentData]);
  return (
    <>
      
    </>
  );
};

export default Dashboard;