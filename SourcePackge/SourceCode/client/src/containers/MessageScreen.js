import React, { Component } from 'react'
import '../css/chat.css'
import ProfileFriend from '../components/chat/ProfileFriend';
import MatchFriend from '../components/chat/MatchFriend';
import Message from './../components/chat/Message';
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import LikeFriend from '../components/chat/LikeFriend';

import ChatRoom from '../components/chat/ChatRoom'
export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : 1
    }
  }
  displayMatchFriend=()=>{
    return (
      <li className="person active">
            <img src="images/ava.jpg" alt="true" />
            <span className="name">Vu Lam</span>
            <span className="time">1:44 PM</span>
            <span className="preview">I've forgotten how it felt before</span>
        </li>
    )
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
      return this.displayMatchFriend();
    } else {
      return this.displayLikeFriend();
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
            <ChatRoom currentChat={this.props.appState.chat.currentChat}/>
          </div>
          <div className="right">
            <ProfileFriend/>
          </div>
        </div>
      </div>
      
    )
  }
}
