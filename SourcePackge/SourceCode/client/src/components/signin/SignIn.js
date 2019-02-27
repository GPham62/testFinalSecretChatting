import React, { Component } from 'react'
import '../../css/signin.css'
export default class SignIn extends Component {
  render() {
    return (
      <div className="container-signin">
        <h2>Secret Dating</h2>
        <button className="loginBtn loginBtn--facebook">Login with Facebook</button>
      </div>
    )
  }
}
