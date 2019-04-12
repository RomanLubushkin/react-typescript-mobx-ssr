import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Routes} from './store/meta';
import Pages from './pages'
import {WithTranslation, withTranslation} from 'react-i18next';

interface AppProps extends WithTranslation {
}

class App extends Component<AppProps> {
    render() {
        const {t} = this.props;
        return (
            <div className="App">
                {t('ui-localized')}
                <h1>
                    <Link to={Routes.MAIN_PAGE}>MainPage</Link>
                    <span> | </span>
                    <Link to={Routes.OTHER_PAGE}>OtherPage</Link>
                </h1>
                <Pages/>
            </div>
        );
    }
}

export default withTranslation()(App);
