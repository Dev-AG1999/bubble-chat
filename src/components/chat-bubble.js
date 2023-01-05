import React from 'react'

export const ChatBubble = ({style,username,text,time}) => {
  return (
    <div className='chat_bubble_wrapper' style={style}>
        <span>{username}</span>
        <p>{text}</p>
        <p>{time}</p>
    </div>
  )
}
