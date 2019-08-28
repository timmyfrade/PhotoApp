import React, { Component } from 'react';

import '../../components/photoAppHeader/index.css';

export default class PhotoAppHeader extends Component {
    render() {
        return (
            <div className='appHeader'>
                <h1 className='headerTitle'>Welcome to Flickr Alternative Photography Feed!</h1>
                {this.props.children}
            </div>
        );
    }
}
