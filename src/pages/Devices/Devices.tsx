import React, { useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { useContentData } from '@/contexts';
import { Empty } from '@/components';

const Devices: React.FC = () => {
    const { setContentData } = useContentData();
    useEffect(() => {
        setContentData({
            caption: 'Оборудование',
            title: 'Добавить',
            icon: MdAdd,
            onClick: () => console.log('click'),
            
        });
    }, [setContentData]);

    return (
        <>  
            <Empty />
        </>
    );
};

export default Devices;