import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component {
  static propTypes = {
    logo: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string
  }
  render() {
    return (
        <div className="App-header">
          <img src={this.props.logo} className="App-logo" alt={this.props.alt} />
          <h2>{this.props.text}</h2>
        </div>
    )
  }
}
