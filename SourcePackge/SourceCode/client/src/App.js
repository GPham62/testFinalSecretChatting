import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'
import openSocket from 'socket.io-client'

import {connectedToSocket, chatsFetched, requestChatsOfUser} from './redux/actionCreator'

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/SignIn';
import SuggestScreen from './containers/SuggestScreen'
import MessageScreen from './containers/MessageScreen'
import ProfileScreen from './containers/ProfileScreen'


const socketURL = 'http://localhost:5000'
const socket = openSocket(socketURL)


class App extends Component {
  
  componentWillMount() {
    this.props.dispatch(connectedToSocket(socket))
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" render={(props) => <Signin {...props} apiUrl={socketURL} appState={this.props}/>}  />
          <Route path="/suggest" render={(props) => <SuggestScreen {...props} appState={this.props}/>}  />
          <Route path="/chat" render={(props) => <MessageScreen {...props} appState={this.props} />} />
          <Route path="/my-profile" render={(props) => <ProfileScreen {...props} appState={this.props} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  chat: state.chatReducer,
  user: state.userReducer
})


export default connect(mapStateToProps)(App) ;
