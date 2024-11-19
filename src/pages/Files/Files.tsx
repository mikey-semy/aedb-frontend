import React, { useEffect, useRef } from 'react';
import Cheatsheets from './Cheatsheets';
import Manuals from './Manuals';
import Software from './Software';
import { MdAdd } from 'react-icons/md';
import { useContentData } from '@/contexts';
import { Tabs, Search } from '@/components';
import { FormAddManual } from '@/pages/Files/Modals';

const Files: React.FC = () => {
  const { setContentData } = useContentData();
  const ref = useRef({ open: () => {} });
  const [searchValue, setSearchValue] = React.useState('');
  const [activeTab, setActiveTab] = React.useState(0);

  const getPlaceholder = () => {
    switch (activeTab) {
      case 0:
        return 'Поиск по документациям';
      case 1:
        return 'Поиск по шпаргалкам';
      case 2:
        return 'Поиск по программам';
      default:
        return 'Поиск...';
    }
  };

  useEffect(() => {
    setContentData({
        caption: 'Файлы',
        title: 'Добавить',
        icon: MdAdd,
        onClick: () => ref.current.open(),
        isToolbar: true,
        toolbarContent: (
          <Search 
            value={searchValue}
            onChange={setSearchValue}
            placeholder={getPlaceholder()}
          />
        )
    });
}, [setContentData, searchValue, activeTab]);

  return (
    <>
      <FormAddManual ref={ref} />
      <Tabs tabs={[
        { 
          label: 'Документация', 
          content: <Manuals searchValue={searchValue} /> 
        }, 
        { 
          label: 'Шпаргалки', 
          content: <Cheatsheets searchValue={searchValue} /> 
        }, 
        { 
          label: 'Программы', 
          content: <Software searchValue={searchValue} /> 
        }
      ]} 
        onTabChange={setActiveTab}
      />
    </>
  );
};

export default Files;