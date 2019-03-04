import React, { Component } from 'react'

export default (props) => {
  
  return (
      <div className={props.user.currentUser._id === props.authorid ? 'bubble me' : 'bubble you'}>
          {props.content}
      </div>
  )
}
