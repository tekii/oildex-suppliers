import FlipCard from '../flipcard';
import React, {Component} from 'react';

import './card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        };

        this.showBack = this.showBack.bind(this);
        this.showFront = this.showFront.bind(this);

        return;
    }

    showBack() {
        this.setState({
            isFlipped: true
        });
    }

    showFront() {
        this.setState({
            isFlipped: false
        });
    }

    render() {
        // The `disabled` attribute allows turning off the auto-flip
        // on hover, or focus. This allows manual control over flipping.
        // The `flipped` attribute indicates whether to show the front,
        // or the back, with `true` meaning show the back.
        return (
            <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
            >
                <div>
                    <div>Front</div>
                    <button type="button" onClick={this.showBack}>Show back</button>
                    <div><small>(manual flip)</small></div>
                </div>
                <div>
                    <div>Back</div>
                    <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
                </div>
            </FlipCard>
        );
    }
}
