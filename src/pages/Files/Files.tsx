import React, { useEffect, useRef, useState } from 'react';
import Cheatsheets from './Cheatsheets';
import Manuals from './Manuals';
import Software from './Software';
import { MdAdd } from 'react-icons/md';
import { useContentData } from '@/contexts';
import { Tabs, Search, ModalAddManual } from '@/components';

/**
 * Компонент страницы файлов с вкладками для документации, шпаргалок и программ
 * @component
 */
const Files: React.FC = () => {
    /** Контекст для управления содержимым хедера */
    const { setContentData } = useContentData();

    /** Реф для управления модальным окном добавления инструкции */
    const refAddManual = useRef({ open: () => {} });

    /** Состояние поисковой строки */
    const [searchValue, setSearchValue] = useState('');

    /** Состояние активной вкладки (0 - Документация, 1 - Шпаргалки, 2 - Программы) */
    const [activeTab, setActiveTab] = useState(0);

    /**
     * Реф для хранения функции обновления списка инструкций.
     * Используется реф вместо состояния для сохранения между рендерами
     */
    const updateFunctionRef = useRef<() => Promise<void>>();

    /**
     * Вызывает обновление списка инструкций
     * @async
     */
    const handleUpdate = async () => {
        if (updateFunctionRef.current) {
            await updateFunctionRef.current();
        }
    };

    /**
     * Сохраняет функцию обновления списка в реф
     * @param {() => Promise<void>} fn - Функция обновления списка
     */
    const handleUpdateFunction = (fn: () => Promise<void>) => {
        updateFunctionRef.current = fn;
    };

    /**
     * Возвращает плейсхолдер для поисковой строки
     * @returns {string} Текст плейсхолдера
     */
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

     /**
     * Обработчик клика по кнопке добавления
     * @returns {void}
     */
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

    /** Эффект для обновления содержимого хедера */
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
                            <ModalAddManual ref={refAddManual} fetchManualItems={handleUpdate} />
                            <Manuals searchValue={searchValue} onFetchManualItems={handleUpdateFunction} />
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