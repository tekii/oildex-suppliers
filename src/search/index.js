import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onSuggestionsInputChange = this.onSuggestionsInputChange.bind(this);

        return;
    }
    getSuggestionValue(s) {
        return s;
    }

    onSuggestionsClearRequested() {
        return;
    }

    onSuggestionsFetchRequested() {
        return;
    }

    onSuggestionsInputChange(e) {
        let value = e.target.value;

        this.setState(() => {
            return {
                term: value
            };
        });
        return;
    }

    renderSuggestion(s) {
        return (
            <div>{s}</div>
        );
    }

    render() {
        let inputProps = {
            className: 'form-control',
            onChange: this.onSuggestionsInputChange,
            placeholder: 'Type a supplier name',
            value: this.state.term
        };

        return (
            <Autosuggest
                getSuggestionValue={this.getSuggestionValue}
                inputProps={inputProps}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                renderSuggestion={this.renderSuggestion}
                suggestions={[]}
            />
        )
    }
};
