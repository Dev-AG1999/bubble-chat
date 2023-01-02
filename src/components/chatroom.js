
import React from 'react';
import { Avatar } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link,useParams } from 'react-router-dom';
import { chats } from './chats';




export const Chatroom=()=> {
  const params = useParams();

  const contact= chats.filter((x) => x.id === params.id);

  return (
    < div className="chatroom_wrapper">
    
          <div className='header'>
          <Avatar src=''></Avatar>
     
          <h2>{contact.username}</h2>
    <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
  </div>

  <div className='chatbox'></div>

  <div className='msginput'>
    <input type="text" placeholder='Write a message'/>
    <button className='submit' type='submit'><NearMeIcon/></button>
  </div>
    </div>

  )
}

