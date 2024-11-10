import React, { useState, useEffect, useRef } from 'react';
import Tree from '@/components/Common/Tree';
import { getManuals } from './ManualsPage.api';
import { CategoryTypes } from './Categories/Category.types';
import FormAddManual from './Modals/FormAddManual';
import { useContentData } from '@/contexts';
import { MdAdd } from 'react-icons/md';
import { ExtendedTreeItem } from './ManualsPage.types';
const Manuals: React.FC = () => {
    const { setContentData } = useContentData();
    const [manuals, setManualItems] = useState<ExtendedTreeItem[]>([]);
    
    const ref = useRef({ open: () => {} });
    
    useEffect(() => {
        setContentData({
            caption: 'Инструкции',
            title: 'Добавить',
            icon: MdAdd,
            onClick: () => ref.current.open(),
        });
    }, [setContentData]);
    

    const fetchManualItems = async () => {
        try {
            const manuals: CategoryTypes[] = await getManuals();
            

            const categoryItems: ExtendedTreeItem[] = manuals.map((category) => ({
                id: category.id,
                name: category.name,
                groups: category.groups.map((group) => ({
                    id: group.id,
                    name: group.name,
                    manuals: group.manuals.map((manual) => ({
                        id: manual.id,
                        name: manual.title,
                        file_url: manual.file_url,
                        group_id: group.id ?? 0,
                        category_id: manual.category_id,
                    })),
                })),
            }));
            setManualItems(categoryItems);
        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error);
        } 
    };
    
    useEffect(() => {
        fetchManualItems();
      }, []);
      
    return (
        <>  
            <FormAddManual ref={ref} />
            <Tree items={manuals} />
        </>
    );
};

export default Manuals;