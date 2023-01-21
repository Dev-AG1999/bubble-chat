import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import "../../src/style.css";
import { Link } from "react-router-dom";
import { chats } from "./chats";
import { Avatar } from "@mui/material";
import { Modal } from "@material-ui/core";
// import { auth } from "../firebase";
// import firebase from "firebase/compat/app";
// import { ref, getDownloadURL ,addDoc,uploadBytesResumable} from "firebase/storage";

export const Sidebar = () => {
  // const [Username, setUsername] = useState("");
  // const [progress, setProgress] = useState(0);
  // const [image, setImage] = useState(null);
  // const [open, setOpen] = useState(false);
  // const [User, setUser] = useState(null);
  // const [Groups, setGroups] = useState([]);
  const [Name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user has loggeed in

  //       console.log(User);
  //       setUser(authUser.displayName);
  //     } else {
  //       // the user has logged out

  //       setUser(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [User, Username]);

  // useEffect(() => {
  //   let unsub;

  //   unsub = db
  //     .collection("groups")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setGroups(snapshot.docs.map((doc) => doc.data()));
  //     });

  //   return () => {
  //     unsub();
  //   };
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const file = ref(storage, `/images/${image.name}`);
  //   const storageRef = ref(storage, file);
  //   await uploadBytes(storageRef, file).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) =>
  //     db.collection("groups").add({
  //                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //                 id:Math.random(),
  //                     image: url,

  //                   })
  //     );
  //   });
  //   setName("");
  // };

  // const ClickAdd = () => {
  //   setOpen(true);
  // };

  // handlechange event for uploading image

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // handle upload event

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //   if (!image) {
  //     alert("Please upload an image first!");
  //   }
  //   const storageRef = ref(storage, `/images/${image.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
  //   const uploadTask = uploadBytesResumable(storageRef, image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       ); // update progress
  //       setProgress(progress);
  //       if (progress === 100) {
  //         storage
  //           .ref("images")
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             db.collection("groups").add({
  //               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //           id:Math.random(),
  //               image: url,
  //               name : Name,

  //             });
  //             setProgress(0);
  //             setUsername("");
  //             setImage(null);

  //           });
  //       } });

  // };

  // modal for adding group name and image
  //   <Modal open={open} onClose={() => setOpen(false)}>
  //         <div className="image_upload">
  //           <div className="add_group_modal">
  //             <progress
  //               className="imageuplolad_progress"
  //               value={progress}
  //               max="100"
  //             />

  //             <input
  //               className="image_caption"
  //               type="text"
  //               placeholder="Enter a caption"
  //               value={Username}
  //               onChange={(e) => setUsername(e.target.value)}
  //             />
  //             <input
  //               className="choose_file"
  //               type="file"
  //               onChange={handleChange}
  //             />
  //             <button className="imageupload_button" onClick={handleUpload}>
  //               Upload
  //             </button>
  //           </div>

  //           {/* <button className="choose_button" onClick={() => setOpen(true)}>
  // Choose from your computer
  // </button> */}
  //         </div>
  //       </Modal>

  // search

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (value.length > 1) {
        const filterData = chats.filter((contact) => {
          return contact.username.toLowerCase().includes(value.toLowerCase());
        });
        console.log("filterDta", filterData);
        setFilterData(filterData);
      }
    }, 800);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  return (
    <div className="sidebar_container">
      {/* modal will be used here after the problem gets solved */}
      <Modal
      // open={open}
      // onClose={() => setOpen(false)}
      >
        <div className="image_upload">
          <div className="add_group_modal">
            <progress
              className="imageuplolad_progress"
              // value={progress}
              max="100"
            />

            <input
              className="image_caption"
              type="text"
              placeholder="Enter a caption"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="choose_file"
              type="file"
              // onChange={handleChange}
            />
            <button
              className="imageupload_button"
              //  onClick={(e)=>handleSubmit(e)}
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
            placeholder="Search Contact"
            type="text"
          />
        </div>
      </Modal>
      <div className="navbar">
        <Navbar onClick={() => setOpen(true)} />
      </div>
      {value.length === 0 ? (
        <div className="Msglist">
          {chats.map((chat) => (
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
                to={`/chatpage/${chat.id}/${chat.username}`}
              >
                <div className="chat">
                  <div className="sender_image">
                    <Avatar src={chat.image} alt=""></Avatar>
                  </div>
                  <div className="msg_overview">
                    <span>{chat.username}</span>
                  </div>
                </div>
              </Link>
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
                to={`/chatpage/${chat.id}/${chat.username}`}
              >
                <div className="chat">
                  <div className="sender_image">
                    <Avatar src={chat.image} alt=""></Avatar>
                  </div>
                  <div className="msg_overview">
                    <span>{chat.username}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      <button
        //  onClick={ClickAdd}
        className="add_group"
      >
        ➕
      </button>
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
