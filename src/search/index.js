import Autosuggest from 'react-autosuggest';
import {Debounce} from '../utils';
import firebase from '../fire';
import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            suggestions: []
        };

        this.onSuggestionsInputChange = this.onSuggestionsInputChange.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onSuggestionsFetchRequested = Debounce(this.onSuggestionsFetchRequested.bind(this), 300);

        return;
    }
    getSuggestionValue(s) {
        return s;
    }

    onSuggestionsClearRequested() {
        this.setState(() => {
            return {
                suggestions: []
            };
        });
    }

    onSuggestionsFetchRequested() {
        let values = [];
        console.log('values', values);
        return firebase.database()
            .ref('suppliers')
            .orderByChild("name")
            .limitToFirst(5)
            .on("child_added", (supplier) => {
                console.log('child_added', supplier.val());
                values.push(supplier.val().name);
                this.setState((state) => {
                    return {
                        suggestions: values
                    };
                });
            });
    }

    onSuggestionsInputChange(e, nv) {
        let value = nv.newValue;//e.target.value;

        this.setState(() => {
            return {
                term: value
            };
        });
        return;
    }

    renderSuggestion(s, q) {
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
                suggestions={this.state.suggestions}
            />
        )
    }
};
