import React from "react";
import { Navbar } from "./Navbar";
import "../../src/style.css";
import { Link } from "react-router-dom";
import { chats } from "./chats";
import { Avatar } from "@mui/material";
import "../../src/style.css";

export const Sidebar = () => {

  return (
    <div
      className="sidebar_container">
      <div
        className="navbar" >
        <Navbar />
      </div>

      <div className="Msglist">
        {chats.map((chat) => (
          <div key={chat.id}
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            className="chats"
          >
            {/* <Chat  image={chat.image} username={chat.username} key={chat.id}>
                        <Link to={`/chatpage/${chat.id}`}>{chat.username}</Link>
                    </Chat> */}
            <Link className="chat_btn" to={`/chatpage/${chat.id}/${chat.username}`}>
              {" "}
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
