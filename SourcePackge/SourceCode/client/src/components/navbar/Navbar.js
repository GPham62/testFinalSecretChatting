import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MessageScreen from '../../containers/MessageScreen';
import ProfileScreen from '../../containers/ProfileScreen';
import SuggestScreen from '../../containers/SuggestScreen';
export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#000000'}}>
        <Link className="navbar-brand pl-5" to="/">Logo</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 m-auto">
            
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Suitable person</a> */}
                <Link className="nav-link" to="/suggest">Suitable Person</Link>
            </li>
            <li className="nav-item">
                <Link  className="nav-link"  to="/chat">Chat</Link>

              {/* <a className="nav-link" href="#">Chat</a> */}
              
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">My profile</a> */}
              <Link className="nav-link" to="/my-profile">My Profile</Link>
            </li>
          </ul>
      </div>
      <div className="my-2 my-lg-0">
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>
      </div>
    </nav>
      <Route exact path="/suggest" component={SuggestScreen} />
      {/* <Route path="/" component={SuggestScreen} /> */}
      <Route path="/chat" component={MessageScreen} />
      <Route path="/my-profile" component={ProfileScreen} />
      </div>

    )
  }
}
