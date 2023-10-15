import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userDataContext from '../../contexts/userDataContext';
import IsLoggedContext from '../../contexts/IsLoggedContext';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Divider from '../Divider/Divider';
import Header from '../Header/Header';

import './Profile.css';
import { patchMe } from '../../utils/MainApi';

const Profile = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(userDataContext);
  const { setIsLogged } = useContext(IsLoggedContext);

  const [editMode, setEditMode] = useState(false);
  const { values, isValid, handleChange, handleBlur, setValues } = useFormAndValidation();

  function handleSetEditMode() {
    setValues({ ...user });
    setEditMode(true);
  }

  function handleSaveData() {
    patchMe({ name: values.name, email: values.email })
      .then((newUserData) => {
        setUser(newUserData);
        setEditMode(false);

      })
      .catch(() => {
        console.log('Ошибка обновления данных');
      });

  }

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem('token');
    localStorage.removeItem('search');
    navigate('/signin');
  }

  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, {user.name}</h1>

        <form className="profile__fields">
          <div className="profile__field">
            <p className="profile__field-name">Имя</p>

            {editMode ? (
              <input
                type="text"
                className="profile__field-input"
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <p className="profile__field-value">{user.name}</p>
            )}
          </div>

          <Divider type='horizontal' />

          <div className="profile__field">
            <p className="profile__field-name">E-mail</p>

            {editMode ? (
              <input
                type="text"
                className="profile__field-input"
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <p className="profile__field-value">{user.email}</p>
            )}
          </div>
        </form>

        {editMode ? (
          <button className="profile__save-button hoverable" onClick={handleSaveData} disabled={!isValid}>Сохранить</button>

        ) : (
          <div className="profile__buttons">
            <button className="profile__text-button hoverable" onClick={handleSetEditMode}>Редактировать</button>
            <button className="profile__text-button profile__text-button_red hoverable" onClick={handleLogout}>Выйти из аккаунта</button>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;