import React, {Component} from 'react';

import './dashboard.css'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        return;
    }

    render() {
        return (
            <div className="mt-20">
                <div className="row">
                    <div className="col-md">
                        <div className="box">
                            <h1><span><i className="fa fa-star"></i></span>&nbsp;Favorites</h1>
                            <ul className="items">
                                <li><a href="/supplier/1">TEKii SRL</a></li>
                                <li><a href="/supplier/2">Super7Ui</a></li>
                                <li><a href="/supplier/10">Enefen Energy Efficiency Engineering Ltd.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="box">
                            <h1><span><i className="fa fa-thermometer-full"></i></span>&nbsp;Hot this week</h1>
                            <ul className="items">
                                <li><a href="/supplier/2">Super7Ui</a></li>
                                <li><a href="/supplier/1">TEKii SRL</a></li>
                                <li><a href="/supplier/10">Enefen Energy Efficiency Engineering Ltd.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="box">
                            <h1><span><i className="fa fa-clock-o"></i></span>&nbsp;Recently updated</h1>
                            <ul className="items">
                                <li><a href="/supplier/10">Enefen Energy Efficiency Engineering Ltd.</a></li>
                                <li><a href="/supplier/1">TEKii SRL</a></li>
                                <li><a href="/supplier/2">Super7Ui</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
