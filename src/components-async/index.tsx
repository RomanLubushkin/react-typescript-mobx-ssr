import * as React from 'react';
import {SimpleComponentProps} from '../components/SimpleComponent/SimpleComponent';
import {ObserverComponentProps} from '../components/ObserverComponent/ObserverComponent';
import {ImagesComponentProps} from '../components/ImagesComponent/ImagesComponent';

const Loadable = require('react-loadable');

export const AsyncSimpleComponent: React.ComponentClass<SimpleComponentProps> = Loadable({
    loader: () => import('../components/SimpleComponent/SimpleComponent'),
    loading: () => <div>loading...</div>,
    modules: ['SimpleComponent']
});

export const AsyncObserverComponent: React.ComponentClass<ObserverComponentProps> = Loadable({
    loader: () => import('../components/ObserverComponent/ObserverComponent'),
    loading: () => <div>loading...</div>,
    modules: ['ObserverComponent']
});

export const AsyncImagesComponent: React.ComponentClass<ImagesComponentProps> = Loadable({
    loader: () => import('../components/ImagesComponent/ImagesComponent'),
    loading: () => <div>loading...</div>,
    modules: ['ImagesComponent']
});
