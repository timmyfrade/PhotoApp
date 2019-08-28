import React, { Component } from 'react';

import './index.css';

export default class SearchBar extends Component {

    onChange = (e) => {
        if(this.props.onChange){
            this.props.onChange(e)
        }
    }

    onKeyUp = () => {
        if(this.props.onKeyUp){
            this.props.onKeyUp()
        }
    }

    render() {
        return (
            <input
            className='searchbar'
            placeholder={this.props.placeholder}
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
            />
        );
    }
}
