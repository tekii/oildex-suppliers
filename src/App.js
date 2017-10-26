import Card from './card';
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <Card/>
                    </div>
                    <div className="col-md">
                        <Card/>
                    </div>
                    <div className="col-md">
                        <Card/>
                    </div>
                    <div className="col-md">
                        <Card/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
