import React, { Component } from 'react'

export default (props) => {
  const returnClassName = () => {
    const isSender = props.user.currentUser._id === props.authorid
    if (isSender) return 'bubble me'
    else return 'bubble you'
  }
  console.log(returnClassName(), props.user.currentUser._id, props.authorid)
  return (
      <div className={props.user.currentUser._id === props.authorid ? 'bubble me' : 'bubble you'}>
          {props.content}
      </div>
  )
}
