import React, { useContext } from 'react'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from '../context'
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    const Auth = useContext(AuthContext);

  return (
    <div>
        {Auth?.isAuth 
            ? 
            <Routes>
                {privateRoutes.map(route => 
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
            : 
            <Routes>
                {publicRoutes.map(route => 
                    <Route 
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
        }
    </div>
  )
}

export default AppRouter
