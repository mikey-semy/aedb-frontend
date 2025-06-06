import React, { useState, useEffect } from 'react';

import { Lists, Error, Empty, Loading } from '@/components';
import { RouteError } from '@/components/Common/Error/Error.types';
import { getManuals } from './Manuals.api';
import { ApiError } from '@/utils';

import { ManualsTypes, ManualListItem } from './Manuals.types';
import {
    ListItemManuals,
    ListItemContentHeader,
    CategoryName,
    GroupName,
    ManualLink
    } from './Manuals.styles';

const Manuals: React.FC<ManualsTypes> = ({ searchValue, onFetchManualItems }) => {

    const [manuals, setManualItems] = useState<ManualListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<RouteError | null>(null);
    const empty = manuals.length == 0;

    const fetchManualItems = async () => {
        setError(null);
        setLoading(true);
        try {
            const manuals: ManualListItem[] = await getManuals();

            setManualItems(manuals);

        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error);
            const apiError = error as ApiError;
            setError({
                message: apiError.detail || apiError.message || 'Произошла ошибка при загрузке каталога'
            });
        } finally {
            setLoading(false);
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

    useEffect(() => {
        if (onFetchManualItems) {
            onFetchManualItems(fetchManualItems);
        }
    }, [onFetchManualItems]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error}/>;
    }

    if (empty) {
        return <Empty />;
    }
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
                $bordered
            />
        </>
    );
};

export default Manuals;