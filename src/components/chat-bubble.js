import React from "react";

export const ChatBubble = ({ style, username, text, time, image }) => {
  return (
    <div className="chat_bubble_wrapper" style={style}>
      <span>{username}</span>

      <img style={{ width: "100%", marginTop: "10px" ,objectFit:"cover" ,borderRadius:"12px"}} alt="" src={image} />

      <p>{text}</p>
      <p>{time}</p>
    </div>
  );
};
