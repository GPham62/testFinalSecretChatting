import React, { Component } from 'react'
import Message from './Message'

export default class ChatRoom extends Component {
  constructor(props) {
    super(props)
  }
  renderMessages() {
    const {chat} = this.props
    if (chat.currentChatId) {
      if (chat.allChats[chat.currentChatId].messages) {
        chat.allChats[chat.currentChatId].messages.map(message => {
          return (<Message/>)
        })
      } else return <p>Sorry, you guys haven't said a word</p>

    } else return ''
  }
  
  render() {
    return (
      <div>
        <div className="top"><span>To: <span className="name">Vu Lam</span></span></div>
        <div className="chat active-chat">
            {this.renderMessages()}
        </div>
        <div className="write">
            <input type="text" />
            <a href="sss" className="write-link send" />
        </div>
      </div>
    )
  }
}
