import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import Header from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header logo={logo} alt="My React App" text="Welcome to My React App"/>, div);
});
