import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import ROUTE_KEYS from '../constants/routeKeys';
import CloudHome from '../modules/cloudHome';
import UserProfile from '../modules/profile';
import Notification from '../modules/notification';
import LocalStorage from '../modules/localStorage';
import HomePage from '../modules/home';

const AllScreensRoutes = (props) => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} component={CloudHome} />
      <Route path={path + ROUTE_KEYS.HOME} component={HomePage} />
      <Route path={path + ROUTE_KEYS.LOCAL_STORAGE} component={LocalStorage} />
      <Route path={path + ROUTE_KEYS.NOTIFICATIONS} component={Notification} />
      <Route path={path + ROUTE_KEYS.PROFILE} component={UserProfile} />
    </Switch>
  );
};
export default AllScreensRoutes;