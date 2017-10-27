import Card from '../card';
import React, {Component} from 'react';
import firebase from '../fire';

class Supplier extends Component {

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
        );
    }
}

export default Supplier;
