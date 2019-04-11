import * as fs from 'fs';

export const injectHTML = (data, {html, title, meta, link, styles, body, modules, state}) => {
    const scripts = modules.map((m) => `<script type="text/javascript" src="/${m}"></script>`).join('');
    const markup = `<div id="root">${body}</div>`;
    const preloadedState = `<script>window.__PRELOADED_STATE__ = ${state}</script>`;

    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}${link}${styles}</head>`);
    data = data.replace(
        '<div id="root"></div>',
        `${markup}${preloadedState}${scripts}`
    );

    return data;
};

export const buildModulesMap = (manifest) => {
    const list = Object.keys(manifest).filter((asset) => asset.endsWith('.chunk.js.map'));
    return list.reduce((result, mapPath) => {
        const info = JSON.parse(fs.readFileSync(`build/${mapPath}`, 'utf8'));
        info.sources.forEach((source) => result[source.replace('.tsx', '')] = info.file);
        return result;
    }, {});
};

export const extractModules = (modules, modulesMap) => {
    const result = [];
    modules.forEach((m) => {
        const module = modulesMap[m];
        if (module) {
            if (result.indexOf(module) === -1) result.push(module);
        } else {
            console.warn(`Unable to find module ${m}, check modules prop of react-loadable`);
        }
    });
    return result;
};