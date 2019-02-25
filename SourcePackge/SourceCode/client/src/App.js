import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/signin/SignIn';

class App extends Component {
  onLogin = () => {
    window.location.href="http://localhost:3000/api/auth/fb";
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <SignIn onLogin = {this.onLogin}/>
        </div>
      </Router>
    );
  }
}

export default App;
