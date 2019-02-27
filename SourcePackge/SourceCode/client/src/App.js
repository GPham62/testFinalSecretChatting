import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import LoginScreen from './containers/LoginScreen';
import Navbar from './components/navbar/Navbar';


class App extends Component {
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

export default App;
