import IsLoggedContext from '../../contexts/IsLoggedContext';
import UserDataContext from '../../contexts/userDataContext';
import IsMenuOpenContext from '../../contexts/IsMenuOpenContext';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import { getMe, getSavedMovies } from '../../utils/MainApi';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import SavedMoviesContext from '../../contexts/savedMoviesContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    getMe()
      .then((userData) => {
        setUser(userData);
        setIsLogged(true);
      })
      .catch(() => {
        console.log('Ошибка при получении данных пользователя');
        setIsLogged(false);
      });

    getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
        <UserDataContext.Provider value={{ user, setUser }}>
          <IsMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <SavedMoviesContext.Provider value={{ savedMovies, setSavedMovies }}>

              <Menu />
              <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Register />} />


                <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLogged={isLogged} />} />
                <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLogged={isLogged} />} />

                <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLogged={isLogged} />} />

                <Route path='/*' element={<NotFound />} />
              </Routes>

            </SavedMoviesContext.Provider>
          </IsMenuOpenContext.Provider>
        </UserDataContext.Provider>
      </IsLoggedContext.Provider >
    </>
  );
}

export default App;
