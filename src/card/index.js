import BackCard from './back-card';
import FrontCard from './front-card';
import FlipCard from '../flipcard';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './card.css';

export default class Card extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object
        };
    }

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
                <FrontCard
                    companyRole={this.props.companyRole}
                    contact={this.props.contact}
                    onEdit={this.handleEdit}
                />
                <BackCard
                    contact={this.props.contact}
                    onSave={this.handleSave}
                />
            </FlipCard>
        );
    }
}
