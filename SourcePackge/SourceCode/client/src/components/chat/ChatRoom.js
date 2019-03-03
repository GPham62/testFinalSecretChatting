import React, { Component } from 'react'
import Message from './Message'

import {requestMessagesOfChat, messageFetchedFunc } from '../../redux/actionCreator'

export default class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ''
    }
  }
  renderMessages() {
    const {chat} = this.props
    if (chat.currentChatId) {
      if (chat.allChats[chat.currentChatId].messages) {
        if (chat.allChats[chat.currentChatId].messages.length > 0) {
          return chat.allChats[chat.currentChatId].messages.map(id => {
            const message = chat.allMessages[id]
            return (<Message key={message._id} content={message.body} authorid={message.author} user={this.props.user}/>)
          })
        } else return <p>Sorry, you guys haven't said a word</p>
      } else return ''

    } else return ''
  }
  handleInputChange = (event) => {
    this.setState({inputVal: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sending message...')
    const messageData = {
      body: this.state.inputVal,
      author: this.props.user.currentUser._id,
      chatid: this.props.chat.currentChatId
    }
    this.props.chat.socket.emit('send message', messageData)
    this.setState({inputVal: ''})
  }

  componentDidMount() {
    console.log('Mounting...')
    const {socket} = this.props.chat
    if (socket) {
      console.log('Socket on')
      socket.on('saved message', chatData => {
        console.log('New message from server...')
        console.log(chatData)
        this.props.dispatch(messageFetchedFunc(chatData))
      })
    }
  }
  componentDidUpdate() {
    this.fetchMessages()
  }
  fetchMessages = () => {
    const {chat} = this.props
    console.log('fetch messages from server...')
    if (chat.currentChatId) {
      console.log('current chat detected')
      console.log( chat.currentChatId)
      if (!Array.isArray(chat.allChats[chat.currentChatId].messages)) {
        console.log('No messges fetched yet')
        this.props.dispatch(requestMessagesOfChat(chat.currentChatId))
      }
    }
  }
  
  render() {
    return (
      <div>
        <div className="top"><span>To: <span className="name">Vu Lam</span></span></div>
        <div className="chat active-chat">
            {this.renderMessages()}
        </div>
        <div className="write">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputVal} onChange={this.handleInputChange}/>
            <button type="submit"  className="write-link send" ></button>
        </form>
        </div>
      </div>
    )
  }
}
