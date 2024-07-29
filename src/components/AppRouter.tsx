import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from '../context'

const AppRouter = () => {
    const Auth = useContext(AuthContext);

  return (
    <div>
        {Auth?.isAuth 
            ? 
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to="/404"/>
            </Switch>
            : 
            <Switch>
                {publicRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
        }
    </div>
  )
}

export default AppRouter
