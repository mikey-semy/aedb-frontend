import React from 'react';

export type T = unknown; //TODO: Заменить на конкретный тип данных при использовании

export interface PaginationParams {
    page: number; // Текущая страница
    limit: number; // Количество элементов на странице
    sort_by: string; // Ключ для сортировки
    sort_desc: boolean; // Флаг, указывающий, сортировать ли по убыванию
}

export interface TableData<T> {
    items: T[]; // Массив элементов таблицы
    total: number; // Общее количество элементов
    page: number; // Текущая страница
    size: number; // Количество элементов на странице
}

export interface Column {
    key: string; // Ключ столбца
    title: string; // Заголовок столбца
    render?: (value: any, record: any) => React.ReactNode; // Функция для рендеринга значения ячейки
    sortable?: boolean; // Флаг, указывающий, можно ли сортировать столбец
    searchable?: boolean; // Флаг, указывающий, можно ли фильтровать столбец
}   

export interface TableTypes<T> {
    data: TableData<T>; // Интерфейс для данных таблицы
    columns: Column[]; // Массив столбцов таблицы
    loading?: boolean; // Флаг, указывающий, загружаются ли данные
    onParamsChange: (params: { // Функция для обработки изменений параметров
        pagination: PaginationParams; // Параметры пагинации
        search?: string; // Поисковый запрос
    }) => void;
}