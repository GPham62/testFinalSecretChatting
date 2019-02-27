import React, { Component } from 'react'

export default class ProfileFriend extends Component {
  render() {
    return (
        <div className="top">
            <h2><span className="name">Vu Lam</span></h2>
            <img src="images/ava.jpg" alt="true" className="img-fluid" />
            <h5>Name:Vu Lam</h5>
            <h5>Age:26</h5>
            <h5>Rate:<span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" /></h5>
            <button className="btn btn-warning">Report</button>
        </div>
    )
  }
}
