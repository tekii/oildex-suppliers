import React, {Component} from 'react';

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
                        <h1>{val.name}</h1>
                    </div>
                    <div className="col-md">
                        <h1>{val.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <h1>{val.name}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
