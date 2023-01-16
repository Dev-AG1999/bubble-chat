import React, { useState,useCallback,useRef } from 'react'
import Webcam from 'react-webcam';
import CameraInput from './input';
const videoConstraints = {
 
  facingMode: 'user',
}
export const OpenCamera= () => {
  const [picture, setPicture] = useState('');
  const webcamRef = useRef(null); 


  const capture =useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  },[])


  return (
    <div style={{width:"100vw",height:"100vh"}}>
       
      <div style={{ height:"100%",width:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>

        {picture ==='' ? (
          <Webcam style={{height:"90%",width:"100%"}}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img alt='' style={{height:"90%",width:"100%",objectFit:"cover"}} src={picture} />
        )}
         <div style={{position:"absolute",bottom:"0px",width:"100%",display:"flex"}}>
        {picture !=='' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture('')
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
            <CameraInput capture={(e)=>{e.preventDefault()
                capture()}}/>
        )}
       
      </div> 
      </div>
  
    </div>
  )
}
