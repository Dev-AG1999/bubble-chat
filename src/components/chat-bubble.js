import React from 'react'

export const ChatBubble = ({style,username,text}) => {
  return (
    <div className='chat_bubble_wrapper' style={style}>
        <span>{username}</span>
        <p>{text}</p>
    </div>
  )
}
