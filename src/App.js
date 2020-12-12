import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.sass';
import * as ROUTES from './constants/routes';
import MainLayout from './layouts/MainLayout';
import UserInfo from './pages/UserInfo/UserInfo';
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFoundPage/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <MainLayout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.USER_INFO} component={UserInfo}/>
          <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
          <Redirect to={ROUTES.NOT_FOUND}/>
        </Switch>
        </MainLayout>
      </header>
    </div>
  );
}

export default App;
