import Card from './card';
import React, {Component} from 'react';
import Search from './search';
import firebase from './fire';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            supplier: {}
        };

        return;
    }

    componentDidMount() {
        return firebase.database().ref('/suppliers/supplier:1').once('value').then((snapshot) => {
            let supplier = snapshot.val() || {name:'oppps!'};
            this.setState(() => {
                return {
                    supplier: supplier
                };
            });
        });
    }

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
                            <h1>{this.state.supplier.name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <Card companyRole="Head of Company (CEO/President)" contact={this.state.supplier.HoC}/>
                        </div>
                        <div className="col-md">
                            <Card companyRole="Head of Sales" contact={this.state.supplier.HoS}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <Card companyRole="Head of Operations" contact={this.state.supplier.HoO}/>
                        </div>
                        <div className="col-md">
                            <Card companyRole="Head of Accounting" contact={this.state.supplier.HoA}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
