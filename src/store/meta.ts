import AppStore from './AppStore';
import {RouterStore} from 'mobx-react-router';

export type InjectParams = { appStore: AppStore, routerStore: RouterStore };

export interface InitialState {
    firstName?: string;
    lastName?: string;
}

export enum Routes {
    MAIN_PAGE = '/',
    OTHER_PAGE = '/other',
}

declare global {
    interface Window {
        appStore: AppStore;
        __PRELOADED_STATE__: InitialState
    }
}

export function isServer() {
    return !(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );
}