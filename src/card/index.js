import FlipCard from '../flipcard';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);

        return;
    }

    handleEdit() {
        this.setState({
            isFlipped: true
        });
    }

    handleSave() {
        this.setState({
            isFlipped: false
        });
    }

    render() {
        // The `disabled` attribute allows turning off the auto-flip
        // on hover, or focus. This allows manual control over flipping.
        // The `flipped` attribute indicates whether to show the front,
        // or the back, with `true` meaning show the back.
        if (!this.props.contact) {
            // TODO: return placeholder to add new contact ?
            return null;
        }
        return (
            <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
            >
                <div className="h-100">
                    <span className="edit-card" onClick={this.handleEdit}><i className="fa fa-pencil-square-o"></i></span>
                    <div className="h-100 media">
                        <div className="h-100 media-body text-left">
                            <div className="row">
                                <div className="col">
                                    <h5 className="mt-0">{this.props.contact.firstName} {this.props.contact.lastName}</h5>
                                    <h6>{this.props.role}</h6>
                                </div>
                            </div>
                            <div className="align-items-end row user-info">
                                <div className="col">
                                    <ul>
                                        <li>{this.props.contact.address || 'Address'}</li>
                                        <li>{this.props.contact.phone || 'Phone'}</li>
                                        <li>{this.props.contact.title || 'title'}</li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                         <img className="ml-3" src="https://randomuser.me/api/portraits/women/33.jpg" alt="User name"/>
                    </div>
                </div>
                <div>
                    <div>Back</div>
                    <button className="btn btn-primary" type="button" onClick={this.handleSave}>Save</button>
                </div>
            </FlipCard>
        );
    }
}

Card.propTypes = {
    role: PropTypes.string,
    contact: PropTypes.object
};
