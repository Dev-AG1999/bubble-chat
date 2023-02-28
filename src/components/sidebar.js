import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import "../../src/style.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Modal,Backdrop } from "@material-ui/core";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";
import { ref, uploadBytesResumable } from "firebase/storage";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
import { Contact } from "./contact";
// import { remove } from "firebase/database";
import {CircularProgress} from "@mui/material";
// import { doc, getDoc } from "firebase/firestore";

export const Sidebar = ({ newUser }) => {
  const [Username, setUsername] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [openFrom, setOpenform] = useState(false);
  const [Groups, setGroups] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const [chats, setChats] = useState([]);
  // const { currentUser } = useContext(AuthContext);

  const [isClicked, setisClicked] = useState(false);
  const [isContact, setisContact] = useState(false);
  // const [isLoading, setisLoading] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);

  // const history = useNavigate();

  useEffect(() => {
    let unsub;
    unsub = db
      .collection("groups")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setGroups(snapshot.docs.map((doc) => doc.data()));
        setOpenLoader(true)
        setTimeout(()=>{
          setOpenLoader(false);
        },1000)
        return <Backdrop/>
      });
    
   
    return () => {
      unsub();
   
    };
  }, []);

  const clickContact = () => {
    // history("/contact");
    setisClicked(true);
    setisContact(true);

    setTimeout(()=>{
      setOpenLoader(false);
    },1000);
    setOpenLoader(true)
    return <Backdrop/>
   
  
  };

  const clickChat = () => {
    // history("/contact");
    setisClicked(true);
 
    setTimeout(()=>{
      setOpenLoader(false);
    },1000);
    setOpenLoader(true)
    return <Backdrop/>
  };

  //

  const ClickAdd = () => {
    setOpenform(true);
  };

  // handlechange event for uploading image

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // deletegrp chat
  // const deleteGrpChat = () => {
  //   const grpRef = ref(db, "groups");
  //   remove(grpRef).then(() => {
  //     console.log("location removed");
  //   });
  // };

  // handle upload event

  const handleSubmit = (e, gripId) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/images/${image.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      ); // update progress
      setProgress(progress);
      if (progress === 100) {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("groups").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              id: Math.random(),
              image: url,
              name: Username,
            });

            setProgress(0);
            setUsername("");
            setImage(null);
            setOpenform(false);
          });
      }
    });
  };

  // search

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (value.length > 1) {
        const filterData = Groups.filter((contact) => {
          return contact.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log("filterDta", filterData);
        setFilterData(filterData);
      }
    }, 800);

    return () => clearTimeout(delayDebounce);
  }, [value, Groups]);

  return (
    <>
      <div className="sidebar_container">
        {/* modal will be used here after the problem gets solved */}
        <Modal open={openFrom} onClose={() => setOpenform(false)}>
          <div className="image_upload">
            <div
              className="add_group_modal"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                border: "1px solid white",
                padding: "20px",
                borderRadius: "12px",
                background: "white  ",
              }}
            >
              {progress ? (
                <progress
                  className="imageuplolad_progress"
                  value={progress}
                  max="100"
                />
              ) : null}

              <input
                className="image_caption"
                type="text"
                placeholder="Enter group name"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  background: "rgba(102, 0, 255, 0.8470588235)",
                  borderRadius: "12px",
                  padding: "10px",
                  color: "white",
                  border: "none",
                  outline: "none",
                  marginBottom: "10px",
                }}
              />
              <input
                className="choose_file"
                type="file"
                onChange={handleChange}
                style={{
                  background: "rgba(102, 0, 255, 0.8470588235)",
                  borderRadius: "12px",
                  padding: "10px",
                  color: "white",
                  border: "none",
                  outline: "none",
                  marginBottom: "10px",
                }}
              />
              <button
                className="imageupload_button"
                onClick={(e) => handleSubmit(e)}
                style={{
                  background: "rgba(102, 0, 255, 0.8470588235)",
                  borderRadius: "12px",
                  padding: "10px",
                  color: "white",
                  border: "none",
                  outline: "none",
                  marginBottom: "10px",
                }}
              >
                Upload
              </button>
            </div>
          </div>
        </Modal>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="search_input">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search Group"
              type="text"
            />
          </div>
        </Modal>
        <Modal open={openLoader} onClose={()=>setOpenLoader(false)}>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
       open={openLoader}
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </Modal>
       
      
        
        <div className="navbar">
          <Navbar
            style={{ textDecoration: isClicked && "underline" }}
            clicktoContact={() => clickContact()}
            clicktoChat={() => clickChat()}
            onClick={() => setOpen(true)}
          />
        </div>

        <>
          {isContact ? (
            <Contact />
          ) : (
            <>
              {value.length === 0  ? (
                <div className="Msglist">
               
              
   
                  {Groups.map((chat) => (
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
                      <button>🗑️</button>
                    </div>
                  ))}
                 
                </div>
              ) : (
                <div className="Msglist">
                  {filterData.map((chat) => (
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
                  ))}
                </div>
              )}
            </>
          )}
        </>

     {
      isContact? null :   <button onClick={ClickAdd} className="add_group">
      ➕
    </button>
     }
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
    </>
  );
};
