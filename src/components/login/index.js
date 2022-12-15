import { React, useEffect, useState } from "react";
import "../login/style.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Modal from "@mui/material/Modal";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user has loggeed in
        console.log(authUser.displayName);
        setUser(authUser.displayName);
      } else {
        // the user has logged out
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  // function for sign in button
  const SignIn =async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history("/chatpage")
    } catch (err) {
      setErr(true);
    }
  };

  const handleClick = (e) => {
  
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
          user: username,
        });
      })
      .catch((error) => alert(error.message));
    
    console.log("user", username);
 
setOpen(false)
  };
  // function for sign up button
  const SignUp = () => {
    setOpen(true);
  };


  return (
    <div >
      <Modal style={{width:"100vw",height:"100vh",opacity:"1"}} open={open} onClose={() => setOpen(false)}>
<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:"white"}}>
        <div className="login_wrapper">
          <div className="name_field">
            {" "}
            <label className="label1" for="name">
              name
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="name"
              type="text"
              placeHolder="Enter Your name"
            />
          </div>
          <div className="email_field">
            {" "}
            <label className="label1" for="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
              type="email"
              placeHolder="Enter Your Email"
            />
          </div>
          <div className="password_field">
            <label className="label2" for="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              type="password"
              placeHolder="Enter Your Password"
            />
          </div>

          <div className="create_acc">
            <button onClick={(e) => handleClick(e)} className="click_signup">
              Sign Up
            </button>
          </div>
        </div>
        </div>
      </Modal>
      <div className="login_wrapper">
  
        <div className="email_field">
        
          <label className="label1" for="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            type="email"
            placeHolder="Enter Your Email"
          />
        </div>
        <div className="password_field">
          <label className="label2" for="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            type="password"
            placeHolder="Enter Your Password"
          />
        </div>
        <div className="login_button">
          <button onClick={(e) => SignIn(e)} className="click_login">
            Log In
          </button>
        
        </div>
        {err && <span>Something went wrong</span>}

        <div className="create_acc">
          <p>Create a new account</p>
          <button onClick={SignUp} className="click_signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
