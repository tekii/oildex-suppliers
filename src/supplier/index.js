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
            loading: false,
            supplier: {
                val: () => null
            }
        };
        return;
    }

    componentWillUpdate(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.setState(() => {
                return {
                    loading: true
                };
            });

            return firebase.database().ref(`/suppliers/supplier:${nextProps.match.params.id}`).once('value').then((snapshot) => {
                let supplier = snapshot;
                this.setState(() => {
                    return {
                        loading: false,
                        supplier
                    };
                });
            });
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if (id) {
            this.setState(() => {
                return {
                    loading: true
                };
            });

            return firebase.database().ref(`/suppliers/supplier:${id}`).once('value').then((snapshot) => {
                let supplier = snapshot;
                this.setState(() => {
                    return {
                        loading: false,
                        supplier
                    };
                });
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <h1>Loading...</h1>
            );
        }

        let val = this.state.supplier.val() || {name:'oppps!'}
        return (
            <div>
                <div className="row">
                    <div className="col-md">
                        <h1>{val.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <Card companyRole="Head of Company (CEO/President)" contact={val.HoC}/>
                    </div>
                    <div className="col-md">
                        <Card companyRole="Head of Sales" contact={val.HoS}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <Card companyRole="Head of Operations" contact={val.HoO}/>
                    </div>
                    <div className="col-md">
                        <Card companyRole="Head of Accounting" contact={val.HoA}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Supplier;
