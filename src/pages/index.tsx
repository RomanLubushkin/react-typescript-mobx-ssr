import * as React from 'react';
import {Route, Switch} from 'react-router';
import MainPage from './MainPage';
import OtherPage from './OtherPage';
import {Routes} from '../store/meta';

export default () => (
    <Switch>
        <Route exact path={Routes.MAIN_PAGE} component={MainPage}/>
        <Route exact path={Routes.OTHER_PAGE} component={OtherPage}/>
    </Switch>
);