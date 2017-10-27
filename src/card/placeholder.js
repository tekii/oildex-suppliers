import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FrontCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            onClick: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div>
                <div className="media">
                    <div className="media-body text-left">
                        <h5 className="mt-0">Click to add</h5>
                        <h6><small><i>Feature coming soon...</i></small></h6>
                        <h6>{this.props.companyRole}</h6>
                     </div>
                     <img className="ml-3 contact-photo" src={require('../images/placeholder.png')} alt="User name"/>
                </div>
                <div className="mt-3 row user-info">
                    <div className="col-md text-left">
                        Title<br />
                        Address<br />
                        Phone
                    </div>
                </div>
            </div>
        );
    }
};
