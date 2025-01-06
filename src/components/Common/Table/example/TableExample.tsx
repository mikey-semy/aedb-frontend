/*
Этот пример демонстрирует:

Типизацию данных (User interface)
Настройку колонок с кастомным рендерингом
Обработку параметров таблицы
Интеграцию с API
Правильное использование дженериков
Документацию компонентов и функций
*/
import { useState } from 'react';
import { Table } from '@/components';
import { TableData, PaginationParams } from '@/components/Common/Table/Table.types';

/**
 * Интерфейс для данных пользователя
 */
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * Компонент демонстрирующий использование таблицы
 */
const TableExample = () => {
  // Состояние для хранения данных таблицы
  const [tableData, setTableData] = useState<TableData<User>>({
    items: [],
    total: 0,
    page: 1,
    size: 10
  });

  /**
   * Обработчик изменения параметров таблицы
   * @param params - Параметры пагинации и поиска
   */
  const handleParamsChange = async (params: {
    pagination: PaginationParams;
    search?: string;
  }): Promise<void> => {
    try {
      const response = await fetch(
        `/api/users?` +
        `page=${params.pagination.page}` +
        `&limit=${params.pagination.limit}` +
        `&sort_by=${params.pagination.sort_by}` +
        `&sort_desc=${params.pagination.sort_desc}` +
        (params.search ? `&search=${params.search}` : '')
      );
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  /**
   * Конфигурация колонок таблицы
   */
  const columns = [
    {
      key: 'id',
      title: 'ID',
      sortable: true
    },
    {
      key: 'name',
      title: 'Имя',
      sortable: true,
      searchable: true
    },
    {
      key: 'email',
      title: 'Email',
      sortable: true
    },
    {
      key: 'role',
      title: 'Роль',
      sortable: true,
      render: (value: string) => (
        <span style={{ color: value === 'admin' ? 'red' : 'black' }}>
          {value}
        </span>
      )
    }
  ];

  return (
    <div>
      <h1>Список пользователей</h1>
      <Table<User>
        data={tableData}
        columns={columns}
        onParamsChange={handleParamsChange}
      />
    </div>
  );
};

export default TableExample;
