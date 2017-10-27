import Autosuggest from 'react-autosuggest';
import {Debounce} from '../utils';
import firebase from '../fire';
import history from '../history'
import React, {Component} from 'react';
import './search.css';

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
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
        return;
    }
    getSuggestionValue(s) {
        return s.value.name;
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
        let term = this.state.term.toLowerCase().split(' ').join('');
        this.setState((state) => {
            return {
                suggestions: values
            };
        });
        return firebase.database()
            .ref('suppliers')
            .orderByChild("searchName")
            .startAt(term)
            .endAt(term + "\uf8ff")
            .limitToFirst(5)
            .on("child_added", (supplier) => {
                values.push({key:supplier.key, value:supplier.val()});
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

    onSuggestionSelected(e, selected) {
        let id = selected.suggestion.key.split(':')[1]
        history.push(`/supplier/${id}`);
    }

    renderSuggestion(s, q) {
        return (
            <div>{s.value.name}</div>
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
                onSuggestionSelected={this.onSuggestionSelected}
                renderSuggestion={this.renderSuggestion}
                suggestions={this.state.suggestions}
            />
        )
    }
};
