import * as fs from 'fs';
import * as React from 'react';
import * as Loadable from 'react-loadable';
import {Provider, useStaticRendering} from 'mobx-react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import Helmet from 'react-helmet';
import App from '../src/App';
import AppStore from '../src/store/AppStore';
import {buildModulesMap, extractModules, injectHTML} from './utils';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {useSSR} from 'react-i18next';
import {buildI18n, mockTranslations} from '../src/i18n/i18n';

const manifest = require('build/asset-manifest.json');
const modulesMap = buildModulesMap(manifest);
const htmlTemplate = fs.readFileSync('build/index.html', 'utf8');

useStaticRendering(true);

const renderApp = (appStore, sheet, url) => {
    const modules = [];
    return [renderToString(
        <Loadable.Capture report={m => modules.push(m)}>
            <Provider appStore={appStore}>
                <StaticRouter location={url}>
                    <StyleSheetManager sheet={sheet.instance}>
                        <App/>
                    </StyleSheetManager>
                </StaticRouter>
            </Provider>
        </Loadable.Capture>
    ), modules, sheet.getStyleTags()]
};

export default (req, res) => {
    const sheet = new ServerStyleSheet();
    try {
        // todo: check if user authorized with req.cookies
        // todo: define mobx initial state based on authorization

        const state = {firstName: 'Oliver', lastName: 'Smith'};
        const i18n = buildI18n(mockTranslations);
        useSSR(i18n, 'en');
        const appStore = new AppStore(state);
        const [markup, modules, styles] = renderApp(appStore, sheet, req.url);
        const helmet = Helmet.renderStatic();
        const html = injectHTML(htmlTemplate, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            meta: helmet.meta.toString(),
            link: helmet.link.toString(),
            styles: styles,
            body: markup,
            modules: extractModules(modules, modulesMap),
            state: JSON.stringify(state)
        });

        res.send(html);
    } catch (error) {
        // todo: make an awesome error screen
        console.error(error);
        res.send('Internal server error');
    } finally {
        sheet.seal();
    }
};
