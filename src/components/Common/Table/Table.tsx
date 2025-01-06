import { useState, useCallback, ReactNode } from 'react';
import { TableTypes, PaginationParams, Column } from './Table.types';
import {
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    PaginationContainer,
    SearchContainer
} from './Table.styles';

const DEFAULT_PAGE_SIZE = 10;


const Table = <T extends object>({
    data,
    columns,
    onParamsChange
  }: TableTypes<T>) => {
    const [searchValue, setSearchValue] = useState('');
    const [params, setParams] = useState<PaginationParams>({
        page: 1,
        limit: DEFAULT_PAGE_SIZE,
        sort_by: 'id',
        sort_desc: false,
    });

    const handleSort = (key: string): void => {
        const newParams: PaginationParams = {
            ...params,
            sort_by: key,
            sort_desc: params.sort_by === key ? !params.sort_desc : false,
            page: params.page,
            limit: params.limit
        };
        setParams(newParams);
        onParamsChange({ pagination: newParams, search: searchValue });
    };

    const handlePageChange = (page: number): void => {
        const newParams: PaginationParams = {
            ...params,
            page
        };
        setParams(newParams);
        onParamsChange({ pagination: newParams, search: searchValue });
    };

    const handleSearch = useCallback(
        (value: string): void => {
            setSearchValue(value);
            const newParams: PaginationParams = {
                ...params,
                page: 1
            };
            setParams(newParams);
            onParamsChange({ pagination: newParams, search: value });
        },
        [params, onParamsChange]
    );

    return (
        <TableContainer>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </SearchContainer>

            <table>
                <thead>
                    <tr>
                        {columns.map((column: Column) => (
                            <TableHeader
                                key={column.key}
                                onClick={() => column.sortable && handleSort(column.key)}
                                sortable={column.sortable}
                            >
                                {column.title}
                                {params.sort_by === column.key && (
                                    <span>{params.sort_desc ? '↓' : '↑'}</span>
                                )}
                            </TableHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((row: T, index: number) => (
                        <TableRow key={index}>
                            {columns.map((column: Column) => (
                                <TableCell key={column.key}>
                                    {column.render
                                        ? column.render(row[column.key as keyof T], row)
                                        : String(row[column.key as keyof T]) as ReactNode}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </table>
            <PaginationContainer>
                <button
                    disabled={data.page === 1}
                    onClick={() => handlePageChange(data.page - 1)}
                >
                    Предыдущая страница
                </button>
                <span>
                    Страница {data.page} of {Math.ceil(data.total / data.size)}
                </span>
                <button
                  disabled={data.page >= Math.ceil(data.total / data.size)}
                  onClick={() => handlePageChange(data.page + 1)}
                >
                    Следующая страница
                </button>
            </PaginationContainer>
        </TableContainer>
    );
};

export default Table;