import React from 'react'
import GlobalStyles from './styles/global'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
      </BrowserRouter>

      <GlobalStyles/>
    </>
  )
}

export default App
