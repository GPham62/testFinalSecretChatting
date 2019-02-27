import React, { Component } from 'react'
import FilterProfile from '../components/profile/FilterProfile';
import InfoCard from '../components/profile/InfoCard';
import EditProfie from '../components/profile/EditProfile';

export default class ProfileScreen extends Component {
  render() {
    return (
      <div className="container mt-3">  
        <div className="row">
          <div className="col-4">
            <FilterProfile/>
          </div>
          <div className="col-4">
            <InfoCard/>
          </div>
          <div className="col-4">
            <EditProfie/>
          </div>
        </div>
      </div>
    )
  }
}
