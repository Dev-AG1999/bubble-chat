import { Avatar } from '@mui/material'
import React from 'react';
import "../../src/style.css";


export const Chat=({image,username,text,onClick})=> {

  return (
   <button onClick={onClick} className='chat_btn'>  <div className="chat">
   <div className='sender_image'>
      <Avatar src={image} alt=''></Avatar>
  
   </div>
   <div className='msg_overview'>
      <span>{username}</span>
      <p> {text}
      </p>
   </div>
      </div></button>
  
  )
}

