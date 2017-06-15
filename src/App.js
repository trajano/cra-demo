import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import UserInfo from './UserInfo'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} alt="My React App" text="Welcome to My React App" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.  This is something that has changed.
        </p>
        <Grid>
          <Row>
            <Col xs={12}>
              <UserInfo id={1} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
