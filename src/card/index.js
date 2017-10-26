import FlipCard from '../flipcard';
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
        return (
            <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
            >
                <div>
                    <span className="edit-card" onClick={this.handleEdit}><i className="fa fa-pencil-square-o"></i></span>
                    <div className="media">
                        <img className="mr-3" src="https://randomuser.me/api/portraits/women/33.jpg" alt="User name"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">User Name <small>Head of Company</small></h5>
                            Address
                            Phone
                            Title
                         </div>
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
