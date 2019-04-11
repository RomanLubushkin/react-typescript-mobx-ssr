import * as React from 'react';
import Helmet from 'react-helmet';
import {RouteComponentProps} from 'react-router';

export interface OtherPageProps extends RouteComponentProps {
}

class OtherPage extends React.Component<OtherPageProps> {
    render() {
        return (
            <div className="OtherPage">
                <Helmet>
                    <title>Other page</title>
                    <meta name="description" content="Other page awesome description"/>
                    <meta name="keywords" content="other,page,keywords"/>
                    <link rel="canonical" href="http://mysite.com"/>
                    <link rel="alternate" hrefLang="x-default" href="http://mysite.com"/>

                    <meta property="og:title" content="Other page"/>
                    <meta property="og:description" content="Other page awesome description"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content="MySite"/>
                    <meta property="og:url" content="http://mysite.com"/>
                    <meta property="og:image" content="http://mysite.com/og-image.jpg"/>
                    <meta property="og:locale" content="en_EN"/>
                </Helmet>
                OtherPage
            </div>
        );
    }
}

export default OtherPage;