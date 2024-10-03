import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';

interface ManualItem {
  id: number;
  title: string;
  file_url: string;
  cover_image_url: string | undefined;
}

interface GroupItem {
  id: number;
  name: string;
  manuals: ManualItem[];
}

interface CategoryItem {
  id: number;
  name: string;
  logo_url: string | undefined;
  groups: GroupItem[];
}

const ManualsCover: React.FC = () => {

  const [categoriesItems, setCategoryItems] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchCategoryItems = async () => {
     try {
       const response = await api.get<CategoryItem[]>('/nested_manuals');
       
       setCategoryItems(
         response.data.map((category) => ({
           id: category.id,
           name: category.name,
           logo_url: category.logo_url ?? '',
           groups: category.groups.map((group) => ({
             id: group.id,
             name: group.name,
             manuals: group.manuals.map((manual) => ({
               id: manual.id,
               title: manual.title,
               file_url: manual.file_url,
               cover_image_url: manual.cover_image_url ?? '',
             })),
           })),
         }))
       );
       setCategoryItems(response.data);
       console.log('Ответ API:', response.data);
     } catch (error) {
       console.error('Ошибка при загрузке каталога:', error);
     }
   };

   fetchCategoryItems();
  }, []);

  
  
  const [isShortView, setIsShortView] = useState(() => {
    const savedView = localStorage.getItem('isShortView');
    return savedView === 'true' ? true : false;
  });
  
  useEffect(() => {
    localStorage.setItem('isShortView', JSON.stringify(isShortView));
  }, [isShortView]);
  
  useEffect(() => {
    const classNames = [
      'manual__item',
      'manual__link',
      'manual__icon',
      'manual__cover',
      'manual__title'
    ];
  
    classNames.forEach(className => {
      const elements = document.querySelectorAll(`.${className}`);
      if (elements) {
        elements.forEach(element => {
          element.classList.toggle(`${className}--table`, !isShortView);
        });
      }
    });
  }, []);
  
  const toggleView = () => {
    setIsShortView(!isShortView);
  };

  return (
    <div className='manual__container'>
    <div className='manual__toolbar'>
      <button className="button--text" onClick={toggleView}>{ isShortView ? 'Таблица' : 'Обложки'}</button>
    </div>
    <ul className='category__items'>
    {categoriesItems.map((category) => (
        <li className='category__item' key={category.id}>
            <div className='category__caption'>
                <img className='category__logo' src={category.logo_url} alt={category.name} />
                <h2 className='category__title'>{category.name}</h2>
            </div>
            <ul className='group__items'>
            {category.groups.map((group) => (
              <li className='group__item' key={group.id}>
                <h3 className='group__title'>{group.name}</h3>
                {group.manuals.length > 0 ? (
                <ul className='manual__items'>
                  {group.manuals.map((manual) => (
                    <li className='manual__item'  key={manual.id}>
                      <a className='manual__link' href={manual.file_url} target='_blank'>
                        <img className='manual__cover' src={manual.cover_image_url} alt={manual.title} />
                        <span className='manual__icon'>&#x1F4C4;</span>
                        <span className='manual__title'>{manual.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                ) : (
                  <p className='manual__empty'>Здесь пока пусто... :(</p>
                )}
              </li>
            ))}
            </ul>
        </li>
    ))}
</ul>
</div>
  );
};

export default ManualsCover;