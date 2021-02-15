import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Layout from './views/Layout';
import NotFound from './views/NotFound';
import Login from './views/Login';

const routes = [
  {
    name:'home',
    path:'/',
    exact:true,
    component:Layout
  },
  {
    name:'login',
    path:'/login',
    exact:true,
    component:Login
  },
  {
    name:'notFount',
    path:'*',
    component:NotFound
  }
]

const RouterComponent = (...props) => {
  debugger
  return (
    <Router>
      <Switch>
      {
        routes.map(route => {
          return (
           <Route key={route.name} component={route.component} path={route.path} exact={route.exact} ></Route>
          )
        })
      }
      </Switch>
    </Router>
  )
}

export default RouterComponent;