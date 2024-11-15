import React, { useState, useEffect, useRef } from 'react';
import { useContentData } from '@/contexts';

import { Lists } from '@/components';

import { getManuals } from './ManualsPage.api';
import { ManualListItem } from './ManualsPage.types';

import FormAddManual from './Modals/FormAddManual';
import { MdAdd } from 'react-icons/md';



const Manuals: React.FC = () => {
    const { setContentData } = useContentData();
    const [manuals, setManualItems] = useState<ManualListItem[]>([]);
    
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
            const manuals: ManualListItem[] = await getManuals();
            
            setManualItems(manuals);
        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error);
        } 
    };
    
    useEffect(() => {
        fetchManualItems();
    }, []);
    
    const allManuals = manuals.map((item) => ({
        content: (
            <>  
                <div>
                    <span>{item.category_name}</span>
                    <span>{item.group_name}</span>
                </div>
                <a
                    href={item.manual_url}
                    target="_blank">
                    <span>{item.manual_name}</span>
                </a>
            </>
        ),
    }));

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