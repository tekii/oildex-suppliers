import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FrontCard extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            onSave: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div>
                <div>Back</div>
                <button className="btn btn-primary" type="button" onClick={this.props.onSave}>Save</button>
            </div>
        );
    }
};
