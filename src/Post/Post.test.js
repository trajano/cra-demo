import React from 'react';
import ReactDOM from 'react-dom';
import Post from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post id={2}/>, div);
});
