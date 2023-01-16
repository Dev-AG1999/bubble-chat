import React, { useState,useCallback,useRef} from 'react'
import Webcam from 'react-webcam';
import CameraInput from './input';
import {db} from "../firebase";
import firebase from "firebase/compat/app";
import { chats } from "./chats";
import { useParams } from "react-router-dom";



const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
const videoConstraints = {
 
    facingMode: FACING_MODE_USER
}
export const OpenCamera= () => {
  const [picture, setPicture] = useState('');
  const { id } = useParams();
  const webcamRef = useRef(null); 
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  chats.filter((x) => x.id === { id });

  const capture =useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc);

  },[]);

    const handleSubmit =  (e) => {
    e.preventDefault();
      db.collection("chat-rooms").doc(id).collection("messages").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  id:Math.random(),
                      image: picture,
                     
                      
                    })
    
    setPicture(picture);
  };

  const handleClick = useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);

  return (
    <div style={{width:"100vw",height:"100vh"}}>
       
      <div style={{ height:"100%",width:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

        {picture ==='' ? (
             <>

          <Webcam style={{height:"90%",width:"100%"}}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
                ...videoConstraints,
                facingMode
              }}
          />
   
     </>  ) : (
          <img alt='' style={{height:"100%",width:"100%",objectFit:"cover"}} src={picture} />
        )}
         <div style={{position:"absolute",bottom:"0px",width:"100%",display:"flex"}}>
        {picture !=='' ? (<>
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture('')
            }}
            className="btn btn-primary"
          >
            Retake
          </button>

          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary"
          >
          submit
          </button>
          </>
          
        ) : (
            <CameraInput switchCam={handleClick} capture={(e)=>{e.preventDefault()
                capture()}}/>
        )}
       
      </div> 
      </div>
  
    </div>
  )
}
