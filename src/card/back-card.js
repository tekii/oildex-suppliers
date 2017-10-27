import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FrontCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            onCancel: PropTypes.func.isRequired,
            onSave: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div className="h-100 text-left">
                <form className="h-100">
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="title">Title</label>
                        <input type="text" className="col-md-9 form-control form-control-sm" id="title"/>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="address">Address</label>
                        <input type="text" className="col-md-9 form-control form-control-sm" id="address"/>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3" htmlFor="phone">Phone</label>
                        <input type="text" className="col-md-9 form-control form-control-sm" id="phone"/>
                    </div>
                    <div className="row align-self-end">
                        <div className="offset-md-6 col-md-3">
                            <button
                                className="btn btn-sm btn-block btn-outline-secondary"
                                onClick={this.props.onCancel}
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
