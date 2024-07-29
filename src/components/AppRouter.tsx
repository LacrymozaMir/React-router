import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'

const AppRouter = () => {
    const isAuth = false;

  return (
    <div>
        {isAuth 
            ? 
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path}
                        exact={route.exact}
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
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
        }
    </div>
  )
}

export default AppRouter
