import * as history from 'history';
import * as mobx from 'mobx';
import * as serviceWorker from './serviceWorker';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {buildI18n, mockTranslations} from './i18n/i18n';
import {I18nextProvider} from 'react-i18next';

import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Provider} from 'mobx-react';
import {Router} from 'react-router';

import App from './App';
import AppStore from './store/AppStore';
import {isServer} from './store/meta';

const Loadable = require('react-loadable');
const i18n = buildI18n(mockTranslations);
const element = document.getElementById('root');
const browserHistory = history.createBrowserHistory();
const routerStore = new RouterStore();
const syncHistory = syncHistoryWithStore(browserHistory, routerStore);
const initialState = isServer() ? {} : window.__PRELOADED_STATE__ || {};
const appStore = new AppStore(initialState);
const Application = (
    <Provider appStore={appStore} routerStore={routerStore} i18n={i18n}>
        <Router history={syncHistory}>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Router>
    </Provider>
);

mobx.configure({enforceActions: 'always'});

if (element && element.hasChildNodes()) {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(Application, element);
    });
} else {
    ReactDOM.render(Application, element);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Allows accessing app store from the browser console in debug purposes
window.appStore = appStore;
