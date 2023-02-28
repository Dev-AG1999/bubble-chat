import React,{useEffect,useState} from 'react'
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";    
import "../../src/style.css"
import { db } from "../firebase";





export const Contact = ({key,route,avatar,name}) => {
    const [chats, setChats] = useState([]);


    
    useEffect(() => {
      db.collection("users").get().then((querySnapshot) => {
          
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setChats(chat => [...chat , data]);
             
        });
    })

      }, []);


   

//       useEffect(() => {
      
//        const unsub =    db
//             .collection("user").get()
    
//     localStorage.setItem("users",unsub)
//     localStorage.getItem("users")
//    console.log("users",unsub);
       
    
  
//       }, []);



  return (<div className="sidebar_container" >


        <div className="Msglist">
  {
chats.map((chat)=>(
    <div
    key={chat.id}
    style={{
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    }}
    className="chats"
  >
    <Link
      className="chat_btn"
      to={`/chatpage/${chat.id}/${chat.name}`}
    >
          <div className="chat">
                          <div className="msg_content"><div className="sender_image">
                            <Avatar src={chat.image} alt=""></Avatar>
                          </div>
                          <div className="msg_overview">
                            <span>{chat.name}</span>
                          </div></div>
                          
                         
                        </div>
                      </Link>
                      <button >🗑️</button>
  </div>
))
  
       
}
               
      </div>
 
</div>
  
  )
}

