import React, { useEffect, useRef } from 'react';
import Cheatsheets from './Cheatsheets';
import Manuals from './Manuals';
import Software from './Software';
import { MdAdd } from 'react-icons/md';
import { useContentData } from '@/contexts';
import { Tabs } from '@/components';


const Files: React.FC = () => {
  const { setContentData } = useContentData();
  const ref = useRef({ open: () => {} });

  useEffect(() => {
    setContentData({
        caption: 'Файлы',
        title: 'Добавить',
        icon: MdAdd,
        onClick: () => ref.current.open(),
    });
}, [setContentData]);

  return (
    <Tabs tabs={[
      { label: 'Документация', content: <Manuals /> }, 
      { label: 'Шпаргалки', content: <Cheatsheets /> }, 
      { label: 'Программы', content: <Software /> }
    ]} />
  );
};

export default Files;