import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'
import openSocket from 'socket.io-client'

import {connectedToSocket, chatsFetched, requestChatsOfUser} from './redux/actionCreator'

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/SignIn';


const socketURL = 'http://localhost:5000'
const socket = openSocket(socketURL)


class App extends Component {
  
  componentWillMount() {
    this.props.dispatch(connectedToSocket(socket))
  }
  componentDidMount() {
    this.props.dispatch(requestChatsOfUser('5c72d7a58fe4aa445029c67b'))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Signin />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  chat: state.chatReducer
})


export default connect(mapStateToProps)(App) ;
