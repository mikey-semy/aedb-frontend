import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavIcon from './NavIcon';
import Menu from './Menu';
// import ActionHeader from './Actions/ActionHeader';

const Header: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchGetUser = async () => {
    setError(null);
    setLoading(true);
   try {
    // const data = await getUser();
    //  setCategoryItems(data);
    //  console.log('Ответ API:', data);
   } catch (error) {
      console.error('Ошибка при загрузке каталога:', error);
      setError('Не удалось загрузить данные. Попробуйте позже.');
} finally {
    setLoading(false);
   }
 };

  useEffect(() => {
    fetchGetUser();
  }, []);

  // const handleUpdateItems = () => {
  //   fetchGetUser(); // Вызов функции для обновления данных
  //   console.log("Обновление данных о пользователе")
  // };
  if (error) {
    return (
      <div className="error__container">
        <h1 className="error__oops">Оопс!</h1>
        <p className="error__sorry">Извините, что-то пошло не так :(</p>
        <div className="error__message">{error}</div>
        <button className="button-retry" onClick={fetchGetUser}>
          Попробовать снова
        </button>
      </div>
    );
  }
  if (loading) {
    return <div className="loader--select"></div>;
  }
  return (
    <header className="app-header app-header--fixed-top">
        <Logo />
        <NavIcon />
        <Menu />
        {/* <ActionHeader onUpdate={handleUpdateItems} /> */}
    </header>
  );
};

export default Header;