import React from 'react';
import ReactDOM from 'react-dom';
import PhotoApp from '../pages/app/index.js';

/* test to check if <PhotoApp/> renders without crashing */
it('renders <PhotoApp /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
