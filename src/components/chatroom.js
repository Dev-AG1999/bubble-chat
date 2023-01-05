
import React ,{useEffect, useState}from 'react';
import { Avatar } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link,useParams } from 'react-router-dom';
import { chats } from './chats';
import { ChatBubble } from './chat-bubble';
import firebase from 'firebase/compat/app';
// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   orderBy,
// } from 'firebase/firestore';
import { auth,db } from "../firebase";


export const Chatroom=({Username})=> {
  const[isMe,setIsme]=useState(false);
  const[messages,setMessages]=useState([]);
  const [User,setUser]=useState(null);
  const [Message, setMessage] = useState("");

  const {username}= useParams();
const {id}= useParams();


 chats.filter((x) => x.username === {username});
 chats.filter((x) => x.id === {id})


  // use effect listener for fetching comments
  useEffect(() => {
    let unsub;
    if (id) {
      unsub = db
        .collection("chat-rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsub();
    };
  }, [id]);


  // function getMessages(roomId, callback) {
  //   return onSnapshot(
  //       query(
  //           collection(db, 'chat-rooms', roomId, 'messages'),
  //           orderBy('timestamp', 'asc')
  //       ),
  //       (querySnapshot) => {
  //           const messages = querySnapshot.docs.map((doc) => ({
  //               id: doc.id,
  //               ...doc.data(),
  //           }));
  //           callback(messages);
  //       }
  //   );
  // }


;

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // the user has loggeed in
      console.log("me",authUser.displayName);
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
}, [isMe,User,Username]);

const sendMessage = (e) => {
  e.preventDefault();
  db.collection("chat-rooms").doc(id).collection("messages").add({
    id: Math.random(),
    text: Message,
    username: User,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  setMessage("");
};

  return (
    < div className="chatroom_wrapper">
    
          <div className='header'>
          <Avatar src=''></Avatar>
     
          <h2>{username}</h2>
    <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
  </div>

  <div className='chatbox'>{
    messages.map((msg)=>(

      <ChatBubble key={msg.id} text={msg.text} username={msg.username} style={{backgroundColor:"white",width:"70%",padding:"10px"}}/>
    ))

  }

  </div>

  <div className='msginput'>
    <input value={Message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Write a message'/>
    <button onClick={(e)=>sendMessage(e)} className='submit' type='submit'><NearMeIcon/></button>
  </div>
    </div>

  )
}

