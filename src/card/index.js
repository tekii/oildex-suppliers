import BackCard from './back-card';
import Classnames from 'classnames';
import FlipCard from '../flipcard';
import FrontCard from './front-card';
import Placeholder from './placeholder';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './card.css';

export default class Card extends Component {
    static get propTypes() {
        return {
            companyRole: PropTypes.string,
            contact: PropTypes.object,
            onSave: PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);

        return;
    }

    handleCancel() {
        this.setState({
            isFlipped: false
        });
    }

    handleEdit() {
        this.setState({
            isFlipped: true
        });
    }

    handleSave(data) {
        this.props.onSave(data).then(() => {
            this.setState({
                isFlipped: false
            });

            return;
        });

    }

    render() {
        // The `disabled` attribute allows turning off the auto-flip
        // on hover, or focus. This allows manual control over flipping.
        // The `flipped` attribute indicates whether to show the front,
        // or the back, with `true` meaning show the back.
        let frontCard = <FrontCard
            companyRole={this.props.companyRole}
            contact={this.props.contact}
            onEdit={this.handleEdit}
        />;
        let backCard = <BackCard
            contact={this.props.contact}
            onCancel={this.handleCancel}
            onSave={this.handleSave}
        />;
        let placeholder = false;
        if (!this.props.contact) {
            frontCard = <Placeholder companyRole={this.props.companyRole} />;
            backCard = <div/>;
            placeholder=true
        }
        return (
            <div className={Classnames({placeholder:placeholder})}> 
                <FlipCard
                    disabled={true}
                    flipped={this.state.isFlipped}
                    onFlip={this.handleOnFlip}
                    onKeyDown={this.handleKeyDown}
                >
                    {frontCard}
                    {backCard}
                </FlipCard>
            </div>
        );
    }
}
