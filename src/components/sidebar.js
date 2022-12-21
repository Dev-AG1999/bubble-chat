import React from "react";
import { Navbar } from "./Navbar";
import { Chat } from "./chat";
import "../../src/style.css";


export const Sidebar = () => {
  const chats=[
    {
      id:1,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"kemon acho"

    },
    {
      id:2,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"kemon acho"

    },
    {
      id:3,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"hi,valo achi"

    },
    {
      id:4,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"ki korcho"

    },
    {
      id:5,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"how are you"

    },
    {
      id:6,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

      
    },
    {
      id:7,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:8,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:9,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:10,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:11,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:12,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:13,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:14,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    },
    {
      id:15,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      username:"Aishwariya",
      text:"happy birthday"

    }
  ]
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

     <div style={{overflowY:"scroll"}}> 
        {
          chats.map((chat)=>(
            
      <div 
      style={{
       width: "100%",
       justifyContent: "center",
       alignItems: "center",
       display: "flex",
     
      
     }}  className="chats">
            <Chat key={chat.id} image={chat.image} username={chat.username} text={chat.text} />
            </div>
          ))
        }
        </div>
   
      </div>
   
    
  );
};
