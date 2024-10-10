import React, { useState, useEffect } from 'react';
import getGroups from '../../api/Groups/getGroups';

interface Group {
    id: number;
    name: string;
  }
  
interface SelectGroupProps {
  manual: {
    group_id: number | string;
  };
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onError: (error: string | null) => void;
}

const SelectGroup: React.FC<SelectGroupProps> = ({ manual, handleChange, onError }) => {

    const [groups, setGroups] = useState<Group[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        
        const fetchGroups = async () => {
          try {
            const fetchedGroups = await getGroups();
            setGroups(fetchedGroups);
            setLoading(true);
            onError(null);
          } catch (error) {
            console.error('Ошибка при загрузке групп:', error);
            onError('Не удалось загрузить группы');
            setError('Не удалось загрузить группы');
          } finally {
            setLoading(false);
          }
        };
        fetchGroups();
      }, [onError]);

      if (error) {
        return <div className="error-message">{error}</div>;
      }
      if (loading) {
        return <div className="loader">Загрузка...</div>;
      }
  return (
    <select
        name="group_id"
        value={manual.group_id}
        onChange={handleChange}
        required
      >
        <option value="">Выберите группу</option>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>
  );
};

export default SelectGroup;