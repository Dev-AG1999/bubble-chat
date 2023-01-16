import React, { useEffect, useState } from "react";
import { Avatar, Modal } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Link, useParams } from "react-router-dom";
import { chats } from "./chats";
import { ChatBubble } from "./chat-bubble";
import firebase from "firebase/compat/app";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from "react-router-dom";

// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   orderBy,
// } from 'firebase/firestore';
import { auth, db } from "../firebase";

export const Chatroom = () => {
  const [isMe, setIsme] = useState(false);
  const [messages, setMessages] = useState([]);
  const [User, setUser] = useState(null);
  const [Message, setMessage] = useState("");
const [open,setOpen]= useState(false)
  const {username}  = useParams();
  const { id,image } = useParams();

  const history = useNavigate();

  const cameraClick =()=>{
    history("/camera")
  }

  chats.filter((x) => x.username === { username} );
  chats.filter((x) => x.id === { id });
  chats.filter((x)=>x.image==={image})


  // use effect listener for fetching comments
  useEffect(() => {
    let unsub;
    if (id) {
      unsub = db
        .collection("chat-rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsub();
    };
  }, [id]);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user has loggeed in
 
        setIsme(true);
        setUser(authUser.displayName);
  
      } else {
        // the user has logged out

        setIsme(false);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [isMe, User,username]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chat-rooms").doc(id).collection("messages").add({
      id:id,
      text: Message,
      username: User,
      image : image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  const clearChat = (e) => {
    e.preventDefault();
    messages ?(
    db.collection("chat-rooms").doc(id).collection("messages").get().then((querySnapshot) => {
      Promise.all(querySnapshot.docs.map((d) => d.ref.delete()));
    })):alert("No Message To Delete")
    setOpen(false)
  };


  return (
    <div className="chatroom_wrapper">
      <Modal onClose={()=>setOpen(false)} open={open}>
        <div className="chat_options">
        
<button onClick={(e)=>clearChat(e)}>Clear Chat</button>
        </div>
      </Modal>
      <div className="chat_header">
        <div
          className="user_name_avatar"
      
        >
        
          <Avatar src={image}></Avatar>
          <h3>{username}</h3>
        </div>
        <MoreVertIcon className="icon" onClick={()=>setOpen(true)} style={{color:"white"}}></MoreVertIcon>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            to="/chatpage"
          >
            ◀ Back
          </Link>
        </div>
      </div>

      <div className="chatbox">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            text={msg.text}
            username={msg.username}
            style={{
              backgroundColor: "#6600ffd8",
              color: "white",
              width: "70%",
              padding: "2px 10px",
              alignSelf: User? "end" : "start",
              margin: "5px 0",
              borderRadius: "12px",
            }}
          />
        ))}
      </div>

      <div className="msginput">
        <input
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Write a message"
        />
        <CameraAltIcon style={{cursor:"pointer"}} onClick={cameraClick} className="camera"></CameraAltIcon>
        <button
          onClick={(e) => sendMessage(e)}
          className="submit"
          type="submit"
          disabled={!Message}
        >
          <NearMeIcon />
        </button>
      </div>
    </div>
  );
};
