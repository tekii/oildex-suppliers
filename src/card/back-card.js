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
            address: contact.address,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            title: contact.title
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

        return;
    }

    handleCancel() {
        this.setState(() => {
            let contact = this.props.contact || {};
            return {
                address: contact.address,
                firstName: contact.firstName,
                lastName: contact.lastName,
                phone: contact.phone,
                title: contact.title
            }
        });

        this.props.onCancel();

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
        this.props.onSave({
            address: this.state.address || null,
            firstName: this.state.firstName || '',
            lastName: this.state.lastName || '',
            phone: this.state.phone || null,
            title: this.state.title || null
        });

        return;
    }

    render() {
        return (
            <div className="h-100 text-left">
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
                            className="col-md-10 form-control form-control-sm"
                            id="title"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="address">Address</label>
                        <input
                            className="col-md-10 form-control form-control-sm"
                            id="address"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.address}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="phone">Phone</label>
                        <input
                            className="col-md-10 form-control form-control-sm"
                            id="phone"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.phone}
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
