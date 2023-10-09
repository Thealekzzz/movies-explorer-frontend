import { useState, useContext } from 'react';
import userDataContext from '../../contexts/userDataContext';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Divider from '../Divider/Divider';
import Header from '../Header/Header';

import './Profile.css';

const Profile = () => {
  const { user, setUser } = useContext(userDataContext);
  const [editMode, setEditMode] = useState(false);
  const { values, isValid, handleChange, handleBlur, setValues } = useFormAndValidation();

  function handleSetEditMode() {
    setValues({ ...user });
    setEditMode(true);
  }

  function handleSaveData() {
    setUser({ ...values });
    setEditMode(false);

  }

  return (
    <>
      <Header />
      <div className="profile">
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
          <button className="profile__save-button hoverable" onClick={handleSaveData}>Сохранить</button>

        ) : (
          <div className="profile__buttons">
            <button className="profile__text-button hoverable" onClick={handleSetEditMode}>Редактировать</button>
            <button className="profile__text-button profile__text-button_red hoverable" disabled={!isValid}>Выйти из аккаунта</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;