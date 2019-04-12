import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {InjectParams} from '../../store/meta';
import AppStore from '../../store/AppStore';

export interface ObserverComponentProps {
    appStore?: AppStore;
}

@inject((params: InjectParams) => ({appStore: params.appStore}))
@observer
class ObserverComponent extends React.Component<ObserverComponentProps> {
    render() {
        const appStore = this.props.appStore!;
        return (
            <div className="ObserverComponent">
                First name: {appStore.firstName}
                <br/>
                Last name: {appStore.lastName}
                <br/>
                Full name: {appStore.fullName}
            </div>
        );
    }
}

export default ObserverComponent;
