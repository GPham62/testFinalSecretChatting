import React, { Component } from 'react'
import '../css/chat.css'
import ProfileFriend from '../components/chat/ProfileFriend';
import ChatRoomInfo from '../components/chat/ChatRoomInfo';
import MatchFriend from '../components/chat/MatchedUser';
import Message from './../components/chat/Message';
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import LikeFriend from '../components/chat/LikeFriend';

import {changeCurrentChatRoom, requestChatsOfUser} from '../redux/actionCreator'

import ChatRoom from '../components/chat/ChatRoom'
export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : 1
    }
  }

  displayMatchFriend=()=>{
    const {chat} = this.props.appState
    if (chat.allChatIds) {
      return chat.allChatIds.map((chatid) => {
        return (<ChatRoomInfo onChatRoomClick={() => this.handleChatRoomClick(chatid)} key={chatid} chat={chat.allChats[chatid]}/>)
      })

    } else return ''
  }
  displayLikeFriend = ()=>{
    return (
      <li className="person">
        <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/51330692_2299751730044477_7623879117213007872_n.jpg?_nc_cat=100&_nc_oc=AQkxfcEgXHDhpMOw7UywWSXMdhZxRZkfKbv435shfGZYmokggrpuwkZtO3Qt2HYCMws&_nc_ht=scontent.fhan2-4.fna&oh=ac2dc207d9ab00e8843e762cd9980d9e&oe=5D21A0C2" alt="true" />
        <span className="name">Vu Lam</span>
        <span className="time">1:44 PM</span>
        <span className="preview">Matched</span>
    </li>
    )
  }
  likeClick = ()=>{
    this.setState({
      display:1
    });
  }
  chatClick = ()=>{
    this.setState({
      display:0
    });
  }
  displayFriend = ()=>{
    if (this.state.display===0) {
      console.log('Display matched friends')
      return this.displayMatchFriend();
    } else {
      return this.displayLikeFriend();
    }
  }

  handleChatRoomClick = (chatid) => {
    const {socket} = this.props.appState.chat
    console.log('chat room clicked', chatid)
    socket.emit('join chat', chatid)
    this.props.appState.dispatch(changeCurrentChatRoom(chatid))
    
  }

  componentDidUpdate() {
    const store = this.props.appState
    if (store.user.currentUser && !store.chat.allChatIds) {
      store.dispatch(requestChatsOfUser(store.user.currentUser._id))
    }

  }

  
  render() {
    return (
        <div className="wrapper">
        <div className="container-chat">
          <div className="left">
            <div className="top">
              {/* <Button name="Yêu thích" click={this.likeClick()} />
              <Button name="Tin nhắn" click={this.chatClick()}/> */}
              <span>
                  <button className="bubbly-button" onClick={this.likeClick}>Kết nối</button>
            </span>
            <span>
                  <button className="bubbly-button" onClick={this.chatClick}>Tin nhắn</button>
            </span>
            </div>
            <ul className="people">
              {this.displayFriend()}
            </ul>
            
          </div>
          <div className="middle">
            <ChatRoom chat={this.props.appState.chat} user={this.props.appState.user} dispatch={this.props.appState.dispatch}/>
          </div>
          <div className="right">
            <ProfileFriend/>
          </div>
        </div>
      </div>
      
    )
  }
}
