import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {removeUser} from '../../redux/actionCreator'
export default class Navbar extends Component {
  renderNavs = () => {
    return this.props.nav.map(navItem => {
      return (<li key={navItem.name} className="nav-item">
        <Link className="nav-link" to={navItem.path}>{navItem.name}</Link>
      </li>)
    })
  }
  renderAuthButton = () => {
    return this.props.isAuthenticated() ? 
      (<button onClick={this.handleAuthclick} className="btn btn-outline-danger my-2 my-sm-0">Log out</button>) :
      ''
  }
  handleAuthclick = () => {
    localStorage.removeItem('auth jwt')
    this.props.appState.dispatch(removeUser())
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#000000'}}>
        <Link className="navbar-brand pl-5" to="/">Logo</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 m-auto">
            
            {this.renderNavs()}
          </ul>
      </div>
      <div className="my-2 my-lg-0">
        {this.renderAuthButton()}
      </div>
    </nav>
      
      </div>

    )
  }
}
