import { useNavigate } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>

      <p className='not-found__link hoverable' onClick={() => navigate(-1)}>Назад</p>
    </main>
  );
};

export default NotFound;