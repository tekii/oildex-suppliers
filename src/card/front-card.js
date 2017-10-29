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

        // let address = [this.props.contact.address, this.props.contact.city, this.props.contact.state, this.props.contact.zipcode];
        // address = address.filter(address => !!address).join(', ');
        let contact = this.props.contact;
        let address = contact.address ? contact.address + ' - ' : '';
        address = address += contact.city ? contact.city + ', ' : '';
        address = address += contact.state ? contact.state + ' ': '';
        address = address += contact.zipcode ? contact.zipcode : '';
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
                        src={this.props.contact.photo || require('../images/placeholder.png')}
                        alt="user"
                    />
                </div>
                <div className="mt-3 row user-info">
                    <div className="col-md text-left">
                        {this.props.contact.title || 'Title'}<br />
                        {address || 'Address'}<br />
                        {this.props.contact.phone || 'Phone'}
                    </div>
                </div>
            </div>
        );
    }
};
