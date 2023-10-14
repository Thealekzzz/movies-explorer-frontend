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

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    }, 200);

    setTimeout(() => {
      setUser({
        name: 'Василий',
        email: 'haha@google.com',
      })
    }, 400);
  }, []);

  return (
    <>
      <IsLoggedContext.Provider value={isLogged}>
        <UserDataContext.Provider value={{ user, setUser }}>
          <IsMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>

            <Menu />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/saved-movies' element={<SavedMovies />} />
              <Route path='/signin' element={<Login />} />
              <Route path='/signup' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>

          </IsMenuOpenContext.Provider>
        </UserDataContext.Provider>
      </IsLoggedContext.Provider>
    </>
  );
}

export default App;
