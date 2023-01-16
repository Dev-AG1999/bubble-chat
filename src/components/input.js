import React from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CollectionsIcon from '@mui/icons-material/Collections';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

const CameraInput = ({capture,switchCam}) => {

    // const[caption,setCaption]=useState("");
  return (
    <div className='msginput' style={{justifyContent:"space-evenly"}}>  
       {/* <input
    value={caption}
    onChange={(e) => setCaption(e.target.value)}
    type="text"
    placeholder="Write a caption..."
  
  /> */}
    <button
   
    className="cameraBtn"
    type="submit"

  
  
  >
    <CollectionsIcon fontSize='large' style={{fontSize:"25px",color:"white",fontWeight:"lighter"}} />
  </button>

  <button
    onClick={capture}
    className="cameraBtn"
    type="submit"

    // disabled={!caption}
  
  >
    <PanoramaFishEyeIcon style={{fontSize:"50px",color:"white",fontWeight:"lighter"}} />
  </button>

  <button     className="cameraBtn"
    type="submit"
 onClick={switchCam}><FlipCameraAndroidIcon fontSize='large' style={{fontSize:"25px",color:"white",fontWeight:"lighter"}} ></FlipCameraAndroidIcon></button>
  
  </div>
  )
}

export default CameraInput