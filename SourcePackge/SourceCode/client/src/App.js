import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'
import openSocket from 'socket.io-client'

import {connectedToSocket} from './redux/actionCreator'

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';


const socketURL = 'http://localhost:5000'
const socket = openSocket(socketURL)


class App extends Component {
  onLogin = () => {
    window.location.href="http://localhost:5000/api/auth/fb";
  }
  componentWillMount() {
    this.props.dispatch(connectedToSocket(socket))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  chat: state.chatReducer
})


export default connect(mapStateToProps)(App) ;
