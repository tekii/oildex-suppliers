import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FrontCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            onEdit: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div ref={this.initPlugins}>
                <span
                    className="edit-card"
                    onClick={this.props.onEdit}
                ><i className="fa fa-pencil-square-o"></i></span>
                <div className="media">
                    <div className="media-body text-left">
                        <h5 className="mt-0">{this.props.contact.firstName} {this.props.contact.lastName}</h5>
                        <h6>{this.props.companyRole}</h6>
                    </div>
                    <img
                        className="ml-3 contact-photo"
                        src={this.props.contact.photo || 'https://randomuser.me/api/portraits/lego/1.jpg'} alt="user"
                    />
                </div>
                <div className="mt-3 row user-info">
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
