import * as React from 'react';
import {SimpleComponentProps} from './SimpleComponent';
import {ObserverComponentProps} from './ObserverComponent';
import {ImagesComponentProps} from './ImagesComponent';

const Loadable = require('react-loadable');

export const AsyncSimpleComponent: React.ComponentClass<SimpleComponentProps> = Loadable({
    loader: () => import('./SimpleComponent'),
    loading: () => <div>loading...</div>,
    modules: ['SimpleComponent']
});

export const AsyncObserverComponent: React.ComponentClass<ObserverComponentProps> = Loadable({
    loader: () => import('./ObserverComponent'),
    loading: () => <div>loading...</div>,
    modules: ['ObserverComponent']
});

export const AsyncImagesComponent: React.ComponentClass<ImagesComponentProps> = Loadable({
    loader: () => import('./ImagesComponent'),
    loading: () => <div>loading...</div>,
    modules: ['ImagesComponent']
});