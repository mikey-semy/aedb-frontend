import React, { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig';

const FormRemoveManual: React.FC = () => {
    
    const [manual, setManual] = useState({
        title: '',
        file_url: '',
        group_id: 0 
    })

    const [groups, setGroups] = useState([])

    useEffect(() => {
        const fetchGroups = async () => {
          try {
            const response = await api.get('/groups')
            setGroups(response.data)
          } catch (error) {
            console.error('Ошибка при загрузке групп:', error)
          }
        }
        fetchGroups()
      }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setManual(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit= async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await api.post('/manual', manual);
            console.log('Инструкция добавлена:', response.data);
            setManual({
                title: '',
                file_url: '',
                group_id: 0 
            })
        } catch (error) {
            console.error('Ошибка при добавлении инструкции:', error);
        }
    };

    return (
    <form className='add-manual-form' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={manual.title}
        onChange={handleChange}
        placeholder="Название инструкции"
        required
      />
      <input
        type="url"
        name="file_url"
        value={manual.file_url}
        onChange={handleChange}
        placeholder="URL файла инструкции"
        required
      />
      <select
        name="group_id"
        value={manual.group_id}
        onChange={handleChange}
        required
      >
        <option value="">Выберите группу</option>
        {groups.map((group: { id: number, name: string }) => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>
      <button type="submit">Обновить</button>
    </form>
    );
};
export default FormRemoveManual;