import React, {Component} from 'react';
import FlipCard from './flipcard';

import './App.css';

class App extends Component {
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
        return (
            <div>
                <header class="header smaller" role="banner">
        			<div id="top-nav" class="topnav">
        				<div id="inner-header" class="wrap cf">
                            <a id="logo" href="/" rel="nofollow" class="smaller">
        						<img src={require('./images/logo-oildex@2x.png')} alt="Oildex"/>
        					</a>
        				</div>
                    </div>
        		</header>
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
                </div>
            );
        }
    }

    export default App;
