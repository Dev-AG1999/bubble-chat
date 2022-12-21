
import React from 'react';
import { Avatar } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';


export const Chatroom=()=> {


  return (
    < div className="chatroom_wrapper">
          <div className='header'>
          <Avatar src=''></Avatar>
    <h2>aish</h2>
  </div>

  <div className='chatbox'></div>

  <div className='msginput'>
    <input type="text" placeholder='Write a message'/>
    <button className='submit' type='submit'><NearMeIcon/></button>
  </div>
    </div>

  )
}

