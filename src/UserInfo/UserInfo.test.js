import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo id={2}/>, div);
});
