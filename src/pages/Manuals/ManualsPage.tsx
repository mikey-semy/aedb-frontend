import React, { useState, useEffect, useRef } from 'react';
import { useContentData } from '@/contexts';
import { CategoryTypes } from '@/pages/Manuals/Categories/Category.types';
import { GroupTypes } from "@/pages/Manuals/Groups/Group.types";
import { ManualTypes } from "@/pages/Manuals/Manuals/Manual.types";
import { listItem } from "@/components/Common/List/List.types";

import { Lists } from '@/components';

import { getManuals } from './ManualsPage.api';
import { ExtendedTreeItem } from './ManualsPage.types';


import FormAddManual from './Modals/FormAddManual';
import { MdAdd } from 'react-icons/md';



const Manuals: React.FC = () => {
    const { setContentData } = useContentData();
    // const [manuals, setManualItems] = useState<ExtendedTreeItem[]>([]);
    
    const ref = useRef({ open: () => {} });
    
    useEffect(() => {
        setContentData({
            caption: 'Инструкции',
            title: 'Добавить',
            icon: MdAdd,
            onClick: () => ref.current.open(),
        });
    }, [setContentData]);
    

    // const fetchManualItems = async () => {
    //     try {
    //         const manuals: CategoryTypes[] = await getManuals();
            

    //         const categoryItems: ExtendedTreeItem[] = manuals.map((category) => ({
    //             id: category.id,
    //             name: category.name,
    //             groups: category.groups.map((group) => ({
    //                 id: group.id,
    //                 name: group.name,
    //                 manuals: group.manuals.map((manual) => ({
    //                     id: manual.id,
    //                     name: manual.title,
    //                     file_url: manual.file_url,
    //                     group_id: group.id ?? 0,
    //                     category_id: manual.category_id,
    //                 })),
    //             })),
    //         }));
    //         setManualItems(categoryItems);
    //     } catch (error) {
    //         console.error('Ошибка при загрузке каталога:', error);
    //     } 
    // };
    
    // useEffect(() => {
    //     fetchManualItems();
    //   }, []);
    
    const allManuals = manuals.flatMap((category: CategoryTypes) =>
        category.groups.flatMap((group: GroupTypes) =>
            group.manuals.map(manual: ManualTypes) => ({
                content: (
                    <>
                        <span>{category.name}</span>
                        <span>/</span>
                        <span>{group.name}</span>
                        <span>/</span>
                        <a
                            href={manual.file_url}
                            target="_blank">
                            <span>{manual.name}</span>
                        </a>
                    </>
                )
            }))
        )
    );
    return (
        <>  
            <FormAddManual ref={ref} />
            <Lists 
                listItems={allManuals}
                bordered  
            />
        </>
    );
};

export default Manuals;