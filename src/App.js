import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.sass';
import * as ROUTES from './constants/routes';
import MainLayout from './layouts/MainLayout';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestrictedImagePage from './pages/RestrictedImagePage/RestrictedImagePage';
import { useSelector } from 'react-redux';
import {
  selectIsUserDateCompelete
} from './slices/userSlice';

function App() {
  const isRouteAllowed = useSelector(selectIsUserDateCompelete);
  return (
    <div className="App">
        <MainLayout>
          <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.USER_INFO} component={UserInfoPage}/>
            <Route path={ROUTES.NOT_FOUND} component={NotFoundPage}/>
            {isRouteAllowed ?
              <Route path={ROUTES.RESTRICTED_IMAGE} component={RestrictedImagePage}/> :
            null}
          <Redirect to={ROUTES.NOT_FOUND}/>
        </Switch>
        </MainLayout>
    </div>
  );
}

export default App;
