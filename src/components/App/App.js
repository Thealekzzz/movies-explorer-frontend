import IsLoggedContext from '../../contexts/IsLoggedContext';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';

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
        </Routes>
      </IsLoggedContext.Provider>
    </>
  );
}

export default App;
