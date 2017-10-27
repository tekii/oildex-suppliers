import Card from '../card';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import firebase from '../fire';

class Supplier extends Component {

    static get propTypes() {
        return {
            id: PropTypes.string
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            supplier: {}
        };
        return;
    }

    componentWillUpdate(nextProps) {
        console.log('componentWillUpdate', nextProps);
        if (this.props.match.params.id !== nextProps.match.params.id) {
            return firebase.database().ref(`/suppliers/supplier:${nextProps.match.params.id}`).once('value').then((snapshot) => {
                let supplier = snapshot.val() || {name:'oppps!'};
                this.setState(() => {
                    return {
                        supplier: supplier
                    };
                });
            });
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        if (id) {
            return firebase.database().ref(`/suppliers/supplier:${id}`).once('value').then((snapshot) => {
                let supplier = snapshot.val() || {name:'oppps!'};
                this.setState(() => {
                    return {
                        supplier: supplier
                    };
                });
            });
        }
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
