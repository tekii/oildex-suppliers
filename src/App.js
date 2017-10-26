import Card from './card';
import React, {Component} from 'react';
import Search from './search';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="header smaller" role="banner">
                    <div id="top-nav" className="topnav">&nbsp;</div>
                    <div id="inner-header" className="wrap cf">
                        <a id="logo" href="/" rel="nofollow" className="smaller">
                            <img src={require('./images/logo-oildex@2x.png')} alt="Oildex"/>
                        </a>
                    </div>
                </header>
                <div className="container" id="content">
                    <div className="row">
                        <div className="col-md">
                            <Search/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <h1>TEKii SRL</h1>
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
