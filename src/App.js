import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashboard from './dashboard';
import React, {Component} from 'react';
import Search from './search';
import Supplier from './supplier';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        return;
    }


    render() {
        return (
            <Router>
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
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/supplier/:id" component={Supplier}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
