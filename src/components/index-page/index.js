
import React , { useState,useEffect }from 'react'
import {Sidebar} from '../sidebar';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';




export const IndexPage = () => {
    const [User, setUser] = useState(null);
    const history = useNavigate()

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user has loggeed in

        console.log(User);
        setUser(authUser.displayName);
      } else {
        // the user has logged out

        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [User]);
  return (
    
    <div className='home' >
      {User?(
      <div className="container" style={{display:"flex",width:"100%"}}>
    <Sidebar/>

 
      </div>):(history("/login"))}
    </div>
  )
}

