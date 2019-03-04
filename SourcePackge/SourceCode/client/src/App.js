import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import openSocket from 'socket.io-client'

import {connectedToSocket, verifyUserJwt} from './redux/actionCreator'

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/SignIn';
import SuggestScreen from './containers/SuggestScreen'
import MessageScreen from './containers/MessageScreen'
import ProfileScreen from './containers/ProfileScreen'

import PrivateRoute from './containers/PrivateRoute'
import MustLoggedOutRoute from './containers/MustLoggedOutRoute'


const socketURL = 'http://localhost:5000'
const socket = openSocket(socketURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.navLoggedIn = [
      {name: 'Find your match', path:'/suggest'},
      {name: 'Chat', path:'/chat'},
      {name: 'Profile', path:'/profile'}
    ]
    this.navLoggedOut = []
    
  }
  
  componentWillMount() {
    this.props.dispatch(connectedToSocket(socket))
    if (localStorage.getItem('auth jwt')) {
      this.props.dispatch(verifyUserJwt(localStorage.getItem('auth jwt')))
    }
  }
  isAuthenticated = () => {
    if (localStorage.getItem('auth jwt') && this.props.user.currentUser) {
      return true
    } else return false
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar appState={this.props} isAuthenticated={this.isAuthenticated} nav={this.isAuthenticated() ? this.navLoggedIn : this.navLoggedOut}/>
          <MustLoggedOutRoute exact path="/" appState={this.props} isAuthenticated={this.isAuthenticated} component={Signin}/>
          <PrivateRoute path="/suggest" appState={this.props} isAuthenticated={this.isAuthenticated} component={SuggestScreen}/>
          <PrivateRoute path="/chat" appState={this.props} isAuthenticated={this.isAuthenticated} component={MessageScreen} />
          <PrivateRoute path="/profile" appState={this.props} isAuthenticated={this.isAuthenticated} component={ProfileScreen} />
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
