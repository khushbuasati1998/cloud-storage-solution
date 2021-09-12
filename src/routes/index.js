import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTE_KEYS from '../constants/routeKeys';
import Onboarding from '../modules/onboarding';
import AllScreensRoutes from './allSceensRoute';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Onboarding} />
                <Route path={ROUTE_KEYS.baseURL} component={AllScreensRoutes} />
            </Switch>
        </Router>
    );
};
export default Routes;