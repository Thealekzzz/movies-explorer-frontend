import { useContext, useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Link, useNavigate } from 'react-router-dom';

import IsLoggedContext from '../../contexts/IsLoggedContext';

import Divider from '../Divider/Divider';

import { login } from '../../utils/MainApi';
import logo from '../../images/logo.svg';
import './Login.css';

const Login = () => {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);
  const navigate = useNavigate();

  const { values, errors, isValid, handleChange, handleBlur } = useFormAndValidation();

  function handleLogin() {
    login(values)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        setIsLogged(true);

        navigate('/movies');
      })
      .catch(() => {
        console.log('Ошибка авторизации');
      });
  }
  
  useEffect(() => {
    if (isLogged) {
      navigate('/movies');
    }
  }, [isLogged, navigate]);

  return (
    <main className="auth">
      <div className="auth__header">
        <img src={logo} alt="Логотип" />
        <h1 className="auth__title">Рады видеть!</h1>
      </div>

      <form className="auth__form" onSubmit={handleLogin}>
        <div className="auth__form-field">
          <label htmlFor="email" className="auth__form-label">E-mail</label>
          <input
            required
            type="email"
            name='email'
            id="email"
            className="auth__form-input"
            placeholder='Example@domain.co'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email || ''}
          />
          <Divider type="horizontal" />
          <p className="auth__form-error">{errors.email}</p>
        </div>

        <div className="auth__form-field">
          <label htmlFor="password" className="auth__form-label">Пароль</label>
          <input
            required
            type="password"
            name='password'
            id="password"
            className="auth__form-input"
            placeholder='********'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password || ''}
          />
          <Divider type="horizontal" />
          <p className="auth__form-error">{errors.password}</p>
        </div>
      </form>

      <div className="auth__footer">
        <button className="auth__button hoverable" disabled={!isValid} onClick={handleLogin}>Войти</button>
        <p className="auth__action-text">Еще не зарегистрированы? <Link to='/signup' className='auth__action-link hoverable'>Регистрация</Link></p>
      </div>
    </main>
  );
};

export default Login;