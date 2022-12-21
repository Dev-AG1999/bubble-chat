import React from 'react'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import "../../src/style.css";

export const Navbar=()=> {
  return (
    <div className='navbar_container'>
   <div className='app_logo'>
   <h2> BubblyChat</h2>
   </div>
<div className='nav_items'>
<div className='profile_image'>
      <a href="/profile">  <Avatar alt='Aishwariya'/></a>
    </div>
    <a className='nav_menu' href='/chat'>Chat</a>
<button className='search'><SearchIcon></SearchIcon></button>
</div>
    </div>
  )
}

