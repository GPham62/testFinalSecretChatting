import React, { Component } from 'react'
import '../../css/button.css'
export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <span>
        <button className="bubbly-button" onClick={this.props.click}>{this.props.name}</button>
      </span>
    )
  }
}
