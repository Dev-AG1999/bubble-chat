import React from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const CameraInput = ({capture,retake}) => {

    // const[caption,setCaption]=useState("");
  return (
    <div className='msginput' style={{justifyContent:"center"}}>  
       {/* <input
    value={caption}
    onChange={(e) => setCaption(e.target.value)}
    type="text"
    placeholder="Write a caption..."
  
  /> */}

  <button
    onClick={capture}
    className="submit"
    type="submit"
    style={{background:"transparent",
cursor:"pointer"}}
    // disabled={!caption}
  
  >
    <PanoramaFishEyeIcon style={{fontSize:"50px",color:"white",fontWeight:"lighter"}} />
  </button></div>
  )
}

export default CameraInput