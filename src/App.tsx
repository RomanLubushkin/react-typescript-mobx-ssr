import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Routes} from './store/meta';
import Pages from './pages'

interface AppProps {
}

export default class App extends Component<AppProps> {
    render() {
        return (
            <div className="App">
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
