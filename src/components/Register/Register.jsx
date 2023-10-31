import './Register.css';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Divider from '../Divider/Divider';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useContext, useEffect, useState } from 'react';
import { register } from '../../utils/MainApi';
import IsLoggedContext from '../../contexts/IsLoggedContext';
import userDataContext from '../../contexts/userDataContext';
import { EMAIL_ALREADY_EXISTS, REGISTER_ERROR } from '../../consts/errors';
import PreLoader from '../PreLoader/PreLoader';

const Register = () => {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);
  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const [status, setStatus] = useState({ visible: false, error: false, message: '' });
  const { values, errors, isValid, handleChange, handleBlur } = useFormAndValidation();

  const [isLoading, setIsLoading] = useState(false);

  function handleRegister() {
    resetStatus();
    setIsLoading(true);
    register(values)
      .then(({ token, ...userData }) => {
        localStorage.setItem('token', token);
        setIsLogged(true);
        setUser(userData);

        setIsLoading(false);
        navigate('/movies');
      })
      .catch((err) => {
        setIsLoading(false);
        setTimeout(() => {
          setStatus({
            visible: true,
            error: true,
            message: err === 'Ошибка 409' ? EMAIL_ALREADY_EXISTS : REGISTER_ERROR,
          });

        }, 100);
      });
  }

  function resetStatus() {
    setStatus((prev) => ({ ...prev, visible: false }));
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
        <h1 className="auth__title">Добро пожаловать!</h1>
      </div>

      <form className="auth__form" onSubmit={handleRegister}>
        <div className="auth__form-field">
          <label htmlFor="name" className="auth__form-label">Имя</label>
          <input
            required
            type="text"
            name='name'
            id="name"
            className="auth__form-input"
            placeholder='Иван'
            disabled={isLoading}
            minLength={2}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name || ''}
          />
          <Divider type="horizontal" />
          <p className="auth__form-error">{errors.name}</p>
        </div>

        <div className="auth__form-field">
          <label htmlFor="email" className="auth__form-label">E-mail</label>
          <input
            required
            type="email"
            name='email'
            id="email"
            className="auth__form-input"
            placeholder='Example@domain.co'
            disabled={isLoading}
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
            minLength={5}
            className="auth__form-input"
            placeholder='********'
            disabled={isLoading}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password || ''}
          />
          <Divider type="horizontal" />
          <p className="auth__form-error">{errors.password}</p>
        </div>
      </form>

      <div className="auth__footer">
        <p
          className={`auth__status-text ${status.visible ? '' : 'auth__status-text_hidden'} ${status.error ? 'auth__status-text_error' : ''}`}
        >{status.message}</p>
        <button className="auth__button hoverable" disabled={!isValid || isLoading} onClick={handleRegister}>
          {isLoading ? (
            <PreLoader isSmall={true} color='black' />
          ) : (
            <>
              Зарегистрироваться
            </>
          )}
        </button>
        <p className="auth__action-text">Уже зарегистрированы? <Link to='/signin' className='auth__action-link hoverable'>Войти</Link></p>
      </div>
    </main>
  );
};

export default Register;