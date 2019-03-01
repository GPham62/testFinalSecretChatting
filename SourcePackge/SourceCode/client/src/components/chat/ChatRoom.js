import React, { Component } from 'react'
import Message from './Message'

export default class ChatRoom extends Component {
  render() {
    return (
      <div>
        <div className="top"><span>To: <span className="name">Vu Lam</span></span></div>
        <div className="chat active-chat">
            <Message/>
        </div>
        <div className="write">
            <input type="text" />
            <a href="sss" className="write-link send" />
        </div>
      </div>
    )
  }
}
