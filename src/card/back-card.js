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

        this.state = {
            address: props.contact.address,
            phone: props.contact.phone,
            title: props.contact.title
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        return;
    }

    handleCancel() {
        this.setState(() => {
            return {
                address: this.props.contact.address,
                phone: this.props.contact.phone,
                title: this.props.contact.title
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

    render() {
        return (
            <div className="h-100 text-left">
                <form className="h-100">
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="title">Title</label>
                        <input
                            className="col-md-9 form-control form-control-sm"
                            id="title"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="address">Address</label>
                        <input
                            className="col-md-9 form-control form-control-sm"
                            id="address"
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.address}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="phone">Phone</label>
                        <input
                            className="col-md-9 form-control form-control-sm"
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
                                onClick={this.props.onSave}
                                type="button"
                            >Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};
