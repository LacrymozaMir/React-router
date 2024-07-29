import React, { useState } from 'react'
import GlobalStyles from './styles/global'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>

      </BrowserRouter>

      <GlobalStyles/>
    </AuthContext.Provider>
  )
}

export default App
