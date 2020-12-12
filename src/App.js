import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.sass';
import * as ROUTES from './constants/routes';
import MainLayout from './layouts/MainLayout';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFoundPage/NotFound';

function App() {
  return (
    <div className="App">
        <MainLayout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.USER_INFO} component={UserInfoPage}/>
          <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
          <Redirect to={ROUTES.NOT_FOUND}/>
        </Switch>
        </MainLayout>
    </div>
  );
}

export default App;
