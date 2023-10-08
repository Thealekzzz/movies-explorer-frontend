import IsLoggedContext from '../../contexts/IsLoggedContext';
import userDataContext from '../../contexts/userDataContext';
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

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(false);

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
        <userDataContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </userDataContext.Provider>
      </IsLoggedContext.Provider>
    </>
  );
}

export default App;
