import React, { useState } from 'react'
import NearMeIcon from "@mui/icons-material/NearMe";

const CameraInput = ({capture,retake}) => {

    const[caption,setCaption]=useState("");
  return (
    <div className='msginput'>     <input
    value={caption}
    onChange={(e) => setCaption(e.target.value)}
    type="text"
    placeholder="Write a caption..."
  
  />

  <button
    onClick={capture}
    className="submit"
    type="submit"
    disabled={!caption}
  
  >
    <NearMeIcon />
  </button></div>
  )
}

export default CameraInput