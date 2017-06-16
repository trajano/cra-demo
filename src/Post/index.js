import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.postUpdate = this.postUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async componentDidMount() {
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
    const post = await postResponse.json()
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
    const user = await userResponse.json()
    post.user = user
    this.setState({ post })
    this.setState({ loading: false })
  }
  getValidationState() {
    return "success"
  }
  handleChange(event) {
    let post = this.state.post
    if (event.target.id === "body") {
      post.body = event.target.value
    }
    else if (event.target.id === "title") {
      post.title = event.target.value
    }
  }
  async postUpdate() {
    this.setState({ loading: true })
    console.log(this.state.post)
    const putResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.id, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.post)
    })
    const post = await putResponse.json()
    this.setState({ post, loading: false })
  }
  render() {
    if (this.state.loading) {
      return null
    }
    return (
      <form>
        <FormGroup
          controlId="title"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            defaultValue={this.state.post.title}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="body"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Body</ControlLabel>
          <FormControl
            componentClass="textarea"
            rows={6}
            defaultValue={this.state.post.body}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="author">
          <ControlLabel>Author</ControlLabel>
          <FormControl
            type="text"
            readOnly
            defaultValue={this.state.post.user.name}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button onClick={this.postUpdate}>Submit</Button>
      </form>)
  }
}
