import React, { Component } from 'react'
export default class SignIn extends Component {
  render() {
    return (
      <div className="container-signin">
        <h2>Secret Dating</h2>
        <button className="loginBtn loginBtn--facebook" onClick={this.props.onLogin}>Login with Facebook</button>
      </div>
    )
  }
}
