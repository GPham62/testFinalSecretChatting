import React from 'react'

export default (props) => {
  return (
    <li onClick={props.onChatRoomClick} className="person">
        <h4>{props.chat.name}</h4>
        <span className="name">@{props.chat.users[0].username}</span>
        <span className="time">1:44 PM</span>
    </li>
  )
}
