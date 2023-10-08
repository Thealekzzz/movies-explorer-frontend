import IsLoggedContext from '../../contexts/IsLoggedContext';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(true);
  }, []);


  return (
    <>
      <IsLoggedContext.Provider value={isLogged}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </IsLoggedContext.Provider>
    </>
  );
}

export default App;
