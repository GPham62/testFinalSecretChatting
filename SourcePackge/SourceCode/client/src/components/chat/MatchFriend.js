import React, { Component } from 'react'

export default class MatchFriend extends Component {
  render() {
    return (
        <li className="person active">
            <img src="images/ava.jpg" alt="true" />
            <span className="name">Vu Lam</span>
            <span className="time">1:44 PM</span>
            <span className="preview">I've forgotten how it felt before</span>
        </li>
    )
  }
}
