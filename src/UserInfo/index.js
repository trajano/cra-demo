import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'
export default class UserInfo extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.props.id)
      .then((response) => {
        response.json().then(user => {
          this.setState({ user })
        })
      })
  }
  render() {
    return (
         <Alert color="info">Hello {this.state.user.name}</Alert>
    )
  }
}
