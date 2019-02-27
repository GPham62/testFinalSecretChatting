import React, { Component } from 'react'
import '../css/chat.css'
import ProfileFriend from '../components/chat/ProfileFriend';
import MatchFriend from '../components/chat/MatchFriend';
import Message from './../components/chat/Message';
import Navbar from '../components/navbar/Navbar';
export default class MessageScreen extends Component {
  render() {
    return (
        <div className="wrapper">
        <div className="container-chat">
          <div className="left">
            <div className="top">
              <input type="text" placeholder="Search" />
              <a href="ss" className="search" />
            </div>
            <ul className="people">
              <MatchFriend/>
            </ul>
            
          </div>
          <div className="middle">
            <div className="top"><span>To: <span className="name">Vu Lam</span></span></div>
            <div className="chat active-chat">
              <Message/>
            </div>
            <div className="write">
              <input type="text" />
              <a href="" className="write-link send" />
            </div>
          </div>
          <div className="right">
            <ProfileFriend/>
          </div>
        </div>
      </div>
      
    )
  }
}
