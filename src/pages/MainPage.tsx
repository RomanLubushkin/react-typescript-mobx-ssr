import * as React from 'react';
import Helmet from 'react-helmet';
import SimpleComponent from '../components/SimpleComponent';
import ObserverComponent from '../components/ObserverComponent';
import ImagesComponent from '../components/ImagesComponent';
import {AsyncImagesComponent, AsyncObserverComponent, AsyncSimpleComponent} from '../components/AsyncComponents';
import {RouteComponentProps} from 'react-router';
import AppStore from '../store/AppStore';
import {InjectParams} from '../store/meta';
import {inject} from 'mobx-react';

interface MainPageProps extends RouteComponentProps {
    appStore?: AppStore;
}

@inject((params: InjectParams) => ({appStore: params.appStore}))
class MainPage extends React.Component<MainPageProps> {
    render() {
        const appStore = this.props.appStore!;
        return (
            <div className="MainPage">
                <Helmet>
                    <html lang="en"/>
                    <title>Main page</title>
                    <meta name="description" content="Main page awesome description"/>
                    <meta name="keywords" content="main,page,keywords"/>
                    <link rel="canonical" href="http://mysite.com"/>
                    <link rel="alternate" hrefLang="x-default" href="http://mysite.com"/>

                    <meta property="og:title" content="Main page"/>
                    <meta property="og:description" content="Main page awesome description"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content="MySite"/>
                    <meta property="og:url" content="http://mysite.com"/>
                    <meta property="og:image" content="http://mysite.com/og-image.jpg"/>
                    <meta property="og:locale" content="en_EN"/>
                </Helmet>

                <h2>Simple components</h2>

                <h3>Sync</h3>
                <SimpleComponent text="Hi! I'm SYNC component with styled text."/>
                <h3>Async</h3>
                <AsyncSimpleComponent text="Hi! I'm ASYNC component with styled text."/>

                <h2>Observer components</h2>
                <button onClick={appStore.makeRandomFirstName}>Random first name</button>
                <button onClick={appStore.makeRandomLastName}>Random last name</button>

                <h3>Sync</h3>
                <ObserverComponent/>
                <h3>Async</h3>
                <AsyncObserverComponent/>

                <h2>Image components</h2>

                <h3>Sync</h3>
                <ImagesComponent/>
                <h3>Async</h3>
                <AsyncImagesComponent/>
            </div>
        );
    }
}

export default MainPage;