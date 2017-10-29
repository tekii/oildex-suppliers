import jQuery from 'jquery';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class BackCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            onCancel: PropTypes.func.isRequired,
            onSave: PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);
        let contact = this.props.contact || {};
        this.state = {
            // Init the form values as empty strings so that
            // the form inputs are controlled by react from
            // the start.
            address: contact.address || '',
            city: contact.city || '',
            error: null,
            firstName: contact.firstName || '',
            lastName: contact.lastName || '',
            phone: contact.phone || '',
            state: contact.state || '',
            title: contact.title || '',
            zipcode: contact.zipcode || ''
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        return;
    }

    handleCancel() {
        this.setState(() => {
            let contact = this.props.contact || {};
            return {
                address: contact.address,
                city: contact.city,
                firstName: contact.firstName,
                lastName: contact.lastName,
                phone: contact.phone,
                state: contact.state,
                title: contact.title,
                zipcode: contact.zipcode
            }
        });

        this.props.onCancel();

        return;
    }

    handleCloseAlert() {
        this.setState(() => {
            return {
                error: null
            };
        });

        return;
    }

    handleInputChange(e) {
        let field = e.target.id;
        let value = e.target.value;

        this.setState(() => {
            return {
                [field]: value
            }
        });

        return;
    }

    handleSave() {
        jQuery.ajax({
            method: 'GET',
            // Looks like somebody doesn't understand how query params work
            // please note the space between the address and the city: that's the address2 param.
            url: `https://trial.serviceobjects.com/AV3/api.svc/DPVAddressInfo/${this.state.address || ' '}/ /${this.state.city || ' '}/${this.state.state || ' '}/${this.state.zipcode || ' '}/WS72-AOE4-VRN3?format=json`
        }).then(data => {
            if (data.Error) {
                let error = data.Error.Desc;
                this.setState(() => {
                    return {
                        error
                    };
                })
                return;
            }

            if (!data.DPVAddress) {
                this.setState(() => {
                    return {
                        error: 'There was an error validating the Address, please try again.'
                    };
                });
                return;
            }

            this.props.onSave({
                address: data.DPVAddress.Address || null,
                city: data.DPVAddress.City || null,
                firstName: this.state.firstName || '',
                lastName: this.state.lastName || '',
                phone: this.state.phone || null,
                state: data.DPVAddress.State || null,
                title: this.state.title || null,
                zipcode: this.state.zipcode || data.DPVAddress.Zip || null
            });

            return;
        }, err => {
            this.setState(() => {
                return {
                    error: 'There was an error validating the Address, please try again.'
                };
            });
            throw err;
        });

        return;
    }

    render() {
        let error;

        if (this.state.error) {
            error = (
                <div className="alert alert-danger alert-dismissible" role="alert">
                    {this.state.error}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.handleCloseAlert}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }

        return (
            <div className="h-100 text-left">
                {error}
                <form className="h-100">
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="firstName">F.&nbsp;Name</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.firstName}
                        />
                        <label className="col-md-2" htmlFor="lastName">L.&nbsp;Name</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="title">Title</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="title"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.title}
                        />
                        <label className="col-md-2" htmlFor="phone">Phone</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="phone"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.phone}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="address">Address</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="address"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.address}
                        />
                        <label className="col-md-2" htmlFor="city">City</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="city"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.city}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="state">State</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="state"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.state}
                        />
                        <label className="col-md-2" htmlFor="zipcode">Zipcode</label>
                        <input
                            className="col-md-4 form-control form-control-sm"
                            id="zipcode"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.zipcode}
                        />
                    </div>
                    <div className="row align-self-end">
                        <div className="offset-md-6 col-md-3">
                            <button
                                className="btn btn-sm btn-block btn-outline-secondary"
                                onClick={this.handleCancel}
                                type="button"
                            >Cancel</button>
                        </div>
                        <div className="col-md-3">
                            <button
                                className="btn btn-sm btn-block btn-outline-primary"
                                onClick={this.handleSave}
                                type="button"
                            >Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};
