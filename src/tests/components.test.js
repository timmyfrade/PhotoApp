import React from 'react';
import ReactDOM from 'react-dom';
import PhotoAppHeader from '../components/photoAppHeader/index.js';
import PhotoListItem from '../components/photoListItem/index.js';
import SearchBar from '../components/searchBar/index.js';

/* test to check if components render without crashing */
it('renders <PhotoAppHeader /> without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoAppHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders <PhotoListItem /> without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders <SearchBar /> without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});