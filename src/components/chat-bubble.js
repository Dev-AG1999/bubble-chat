import React from 'react'

export const ChatBubble = ({style,username,text,time,image}) => {
  return (
    <div className='chat_bubble_wrapper' style={style}>
        <span>{username}</span>
        <img alt='' src={image}/>
        <p>{text}</p>
        <p>{time}</p>
    </div>
  )
}
