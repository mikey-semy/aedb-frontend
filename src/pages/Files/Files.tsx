import React, { useEffect, useRef, useState } from 'react';
import Cheatsheets from './Cheatsheets';
import Manuals from './Manuals';
import Software from './Software';
import { MdAdd } from 'react-icons/md';
import { useContentData } from '@/contexts';
import { Tabs, Search, ModalAddManual } from '@/components';


const Files: React.FC = () => {
  const { setContentData } = useContentData();
  const refAddManual = useRef({ open: () => {} });
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [fetchManualItems, setFetchManualItems] = useState<() => Promise<void>>(() => async () => {});
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

  const refOpenModal = () => {
    switch (activeTab) {
      case 0:
        return refAddManual.current.open();
      case 1:
        return console.log('click1');
      case 2:
        return console.log('click2');
      default:
        return 'Поиск...';
    }
  };

  

  useEffect(() => {
    setContentData({
        caption: 'Файлы',
        title: 'Добавить',
        icon: MdAdd,
        onClick: () => refOpenModal(),
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
      
      <Tabs tabs={[
        { 
          label: 'Документация', 
          content: (
            <>
              <ModalAddManual ref={refAddManual} fetchManualItems={fetchManualItems} />
              <Manuals searchValue={searchValue} onFetchManualItems={setFetchManualItems}/>
            </>
          )
             
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