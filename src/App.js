import Card from './card';
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header class="header smaller" role="banner">
                    <div id="top-nav" class="topnav">&nbsp;</div>
                    <div id="inner-header" class="wrap cf">
                        <a id="logo" href="/" rel="nofollow" class="smaller">
                            <img src={require('./images/logo-oildex@2x.png')} alt="Oildex"/>
                        </a>
                    </div>
                </header>
                <div className="container" id="content">
                    <div className="row">
                        <div className="col-md">
                            <Card/>
                        </div>
                        <div className="col-md">
                            <Card/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <Card/>
                        </div>
                        <div className="col-md">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
