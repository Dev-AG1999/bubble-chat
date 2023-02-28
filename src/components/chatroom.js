import React, { useEffect, useState, useCallback, useRef,useContext } from "react";
import { Avatar, Modal } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Link, useParams } from "react-router-dom";
import { ChatBubble } from "./chat-bubble";
import firebase from "firebase/compat/app";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Webcam from "react-webcam";
import CameraInput from "./input";
import { AuthContext } from "../context/AuthContext";


// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   orderBy,
// } from 'firebase/firestore';
import { auth, db } from "../firebase";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
const videoConstraints = {
  facingMode: FACING_MODE_USER,
  mirrored:"false"
};

export const Chatroom = () => {
  const [isMe, setIsme] = useState(false);
  const [messages, setMessages] = useState([]);
  const [User, setUser] = useState(null);
  const [Username, setUsername] = useState("");
  
  const [Message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { username } = useParams();
  const { id, image } = useParams();
  const [openCamera, setOpenCamera] = useState(false);
  // const [picture, setPicture] = useState('');

  const [picture, setPicture] = useState("");
  const { currentUser } = useContext(AuthContext);

  console.log("cuser",currentUser);

  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  }, []);

  const retakeImg = (e) => {
    e.preventDefault();
    setPicture("");
  };

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT  
        : FACING_MODE_USER
    );
  }, []);

  // chats.filter((x) => x.username === { username });
  // chats.filter((x) => x.id === { id });

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
        setUsername(User)
      } else {
        // the user has logged out

        setIsme(false);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [isMe, User, Username]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chat-rooms")
      .doc(id)
      .collection("messages")
      .add({
        id: Math.random(),
        text: Message,
        username: User,
        image: picture && picture,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setMessage("");
    setPicture("");
    setOpenCamera(false)
    console.log("pc", picture);
  };

  const clearChat = (e) => {
    e.preventDefault();
    messages.length!==0
      ? db
          .collection("chat-rooms")
          .doc(id)
          .collection("messages")
          .get()
          .then((querySnapshot) => {
            Promise.all(querySnapshot.docs.map((d) => d.ref.delete()));
          })
      : alert("No Message To Delete");
    setOpen(false);
  };

  return (
    <div className="chatroom_wrapper">
      <Modal onClose={() => setOpen(false)} open={open}>
        <div className="chat_options">
          <button onClick={(e) => clearChat(e)}>Clear Chat</button>
        </div>
      </Modal>
      <Modal
        style={{
          background:
            "linear-gradient(white, pink, rgba(117, 128, 0, 100), rgba(0, 0, 255, 100))",
        }}
        open={openCamera}
        onClose={() => setOpenCamera(false)}
      >
        <div style={{ width: "100vw", height: "100vh" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {picture === "" ? (
              <>
                <Webcam
                  style={{ height: "90%", width: "100%" }}
                  audio={false}
                  ref={webcamRef}
                   mirrored={facingMode===FACING_MODE_USER}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    ...videoConstraints,
                    facingMode,
                  }}
                />
              </>
            ) : (
              <img
                alt=""
                style={{ height: "90%", width: "100%", objectFit: "contain" }}
                src={picture}
              />
            )}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                width: "100%",
                display: "flex",
              }}
            >
              {picture !== "" ? (
                <>
                 <div className="msginput">
        <input
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Write a message"
        />
      
      <button
                    onClick={(e) => sendMessage(e)}
                    className="submit"
                  >
                     <NearMeIcon />
                  </button>

                  <button
                 onClick={retakeImg}
                 className="submit"
                  >
                   Retake
                  </button>
      </div>
         
                </>
              ) : (
                <CameraInput
                  switchCam={handleClick}
                  capture={(e) => {
                    e.preventDefault();
                    capture();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
      <div className="chat_header">
        <div className="user_name_avatar">
          <Avatar src={image}></Avatar>
          <h3>{username}</h3>
        </div>
        <MoreVertIcon
          className="icon"
          onClick={() => setOpen(true)}
          style={{ color: "white" }}
        ></MoreVertIcon>
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
            image={msg.image}
            text={msg.text}
            username={msg.username}
            style={{
              backgroundColor: "#6600ffd8",
              color: "white",
              padding: "2px 10px",
              alignSelf: currentUser.displayName === msg.username ? "end" : "start",
              margin: "5px 0",
              borderRadius: currentUser.displayName === msg.username ? "0 12px 12px 12px" : "12px 0 12px 12px",
              width:"50%"
          
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
        <CameraAltIcon
          style={{ cursor: "pointer" }}
          onClick={() => setOpenCamera(true)}
          className="camera"
        ></CameraAltIcon>
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
