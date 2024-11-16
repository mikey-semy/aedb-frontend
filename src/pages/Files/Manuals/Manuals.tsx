import React, { useState, useEffect } from 'react';


import { Lists } from '@/components';

import { getManuals } from './Manuals.api';
import { ManualsTypes, ManualListItem } from './Manuals.types';
import { 
    ListItemManuals, 
    ListItemContentHeader, 
    CategoryName, 
    GroupName, 
    ManualLink 
    } from './Manuals.styles';



const Manuals: React.FC<ManualsTypes> = ({ searchValue }) => {

    const [manuals, setManualItems] = useState<ManualListItem[]>([]);
    
    const fetchManualItems = async () => {
        try {
            const manuals: ManualListItem[] = await getManuals();
            
            setManualItems(manuals);
        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error);
        } 
    };
    
    const filteredManuals = manuals.filter(item => 
        item.manual_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.group_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        fetchManualItems();
    }, []);
    
    const allManuals = filteredManuals.map((item) => ({
        content: (
            <>  
                <ListItemContentHeader>
                    <CategoryName>{item.category_name}</CategoryName>
                    <GroupName>{item.group_name}</GroupName>
                </ListItemContentHeader>
                <ManualLink 
                    href={item.manual_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {item.manual_name}
                </ManualLink>
            </>
        ),
    }));

    return (
        <>  
            <Lists 
                listItems={allManuals}
                listItemAs={ListItemManuals}
                bordered  
            />
        </>
    );
};

export default Manuals;