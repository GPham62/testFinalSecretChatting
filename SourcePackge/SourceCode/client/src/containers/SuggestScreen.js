import React, { Component } from 'react'
import '../css/filter.css'
import CardInfo from '../components/suggest/CardInfo';

export default class SuggestScreen extends Component {
  render() {
    return (
        <div className="container mt-3">
            <CardInfo/>
        <div className="global-actions">
          <div className="left-action"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width={26} height={26} alt="like" /></div>
          <div className="top-action"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png" width={18} height={16} alt="love"/></div>
          <div className="right-action"><img src="https://image.ibb.co/dCuESn/Path_3x.png" width={30} height={28} alt="unlike" /></div>
        </div>
      </div>
      
    )
  }
}
