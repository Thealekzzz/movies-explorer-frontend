import './Register.css';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Divider from '../Divider/Divider';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Register = () => {

  const { values, errors, isValid, handleChange, handleBlur } = useFormAndValidation();

  return (
    <div className="auth">
      <div className="auth__header">
        <img src={logo} alt="Логотип" />
        <h1 className="auth__title">Добро пожаловать!</h1>
      </div>

      <form className="auth__form">
        <div className="auth__form-field">
          <label htmlFor="name" className="auth__form-label">Имя</label>
          <input
            required
            type="text"
            name='name'
            id="name"
            className="auth__form-input"
            placeholder='Иван'
            minLength={2}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
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
            value={values.password}
          />
          <Divider type="horizontal" />
          <p className="auth__form-error">{errors.password}</p>
        </div>
      </form>

      <div className="auth__footer">
        <button className="auth__button hoverable" disabled={!isValid}>Зарегистрироваться</button>
        <p className="auth__action-text">Уже зарегистрированы? <Link to='/signin' className='auth__action-link hoverable'>Войти</Link></p>
      </div>
    </div>
  );
};

export default Register;