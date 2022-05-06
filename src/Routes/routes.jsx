import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'


import { Login } from '../pages/login'
import { AdminPage } from '../pages/AdminPage'
import {Cliente} from '../pages/cliente'


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            LoginCliente() ? (
                <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
        )} />
    )
}

const Routes = () => { 
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} />
                <PrivateRoute path='/cliente' component={Cliente} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;