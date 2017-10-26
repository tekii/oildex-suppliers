import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FrontCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            handleEdit: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div>
                <span className="edit-card" onClick={this.props.onEdit}><i className="fa fa-pencil-square-o"></i></span>
                <div className="media">
                    <div className="media-body text-left">
                        <h5 className="mt-0">{this.props.contact.firstName} {this.props.contact.lastName}</h5>
                        <h6>{this.props.companyRole}</h6>
                     </div>
                     <img className="ml-3" src="https://randomuser.me/api/portraits/women/33.jpg" alt="User name"/>
                </div>
                <div className="row mt-3 user-info">
                    <div className="col-md text-left">
                        {this.props.contact.title || 'Title'}<br />
                        {this.props.contact.address || 'Address'}<br />
                        {this.props.contact.phone || 'Phone'}
                    </div>
                </div>
            </div>
        );
    }
};
