import React, { useEffect, useRef, useState } from 'react';
import { useContentData } from '@/contexts';
import { Tabs, Search, Profile, Empty } from '@/components';

/**
 * Компонент страницы файлов с вкладками для документации, шпаргалок и программ
 * @component
 */
const Settings: React.FC = () => {
    /** Контекст для управления содержимым хедера */
    const { setContentData } = useContentData();

    /** Состояние поисковой строки */
    const [searchValue, setSearchValue] = useState('');

    /** Состояние активной вкладки (0 - Документация, 1 - Шпаргалки, 2 - Программы) */
    const [activeTab, setActiveTab] = useState(0);

    /** Эффект для обновления содержимого хедера */
    useEffect(() => {
        setContentData({
            caption: 'Настройки',
            isToolbar: true,
            toolbarContent: (
                <Search
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Поиск по настройкам"
                />
            )
        });
    }, [setContentData, searchValue, activeTab]);

    return (
        <>

            <Tabs tabs={[
                {
                    label: 'Профиль',
                    content: <Profile />
                },
                {
                    label: 'Параметры',
                    content: <Empty />
                },
                {
                    label: 'Интеграции',
                    content: <Empty />
                }
                ]}
                onTabChange={setActiveTab}
            />
        </>
    );
};

export default Settings;