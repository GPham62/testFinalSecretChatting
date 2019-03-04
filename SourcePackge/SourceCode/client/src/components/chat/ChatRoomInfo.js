import React from 'react'

export default (props) => {
  const renderUsers = () => {
    return props.chat.users.map(user => {
      return <span key={user._id} className="name">@{user.username}</span>
    })
  }
  return (
    <li onClick={props.onChatRoomClick} className="person">
        <h4>{props.chat.name}</h4>
        {renderUsers()}
        <span className="time">1:44 PM</span>
    </li>
  )
}
