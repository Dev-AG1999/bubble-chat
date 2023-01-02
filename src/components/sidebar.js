import React from "react";
import { Navbar } from "./Navbar";
import "../../src/style.css";
import { chats } from "./chats";
import { useNavigate } from "react-router-dom";
import { Avatar } from '@mui/material'
import "../../src/style.css"


export const Sidebar = () => {

const history=useNavigate();
   const Chatclicked=()=>{
history("/chatpage")
   }
  return (
    <div
      className="sidebar_container"
      style={{
        height: "100vh",
        background: "rgb(255, 255, 255)",
        width: "450px",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "25px 100px 50px rgba(255, 0, 166, 0.168),   inset -6px 6px 10px #f7fe3181, inset 2px 6px 10px #1a74e5, inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff",
        overflow: "hidden",
        position: "relative",
       
    
      }}
    >
      <div
        className="navbar"
        style={{
          width: "100%",
       
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Navbar />
      
      </div>

     <div className="Msglist" > 
        {
          chats.map((chat)=>(
            
      <div 
      style={{
       width: "100%",
       justifyContent: "center",
       alignItems: "center",
       display: "flex",
     
      
     }}  className="chats">
         {/* <Chat  image={chat.image} username={chat.username} key={chat.id}>
                        <Link to={`/chatpage/${chat.id}`}>{chat.username}</Link>
                    </Chat> */}

<button onClick={Chatclicked} className='chat_btn'>  <div className="chat">
   <div className='sender_image'>
      <Avatar src={chat.image} alt=''></Avatar>
  
   </div>
   <div className='msg_overview'>
<span>{chat.username}</span>
     
   </div>
      </div></button>
           
            </div>
          ))
        }
        </div>

        <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
        </div>
   
      
   
    
  );
  
};
