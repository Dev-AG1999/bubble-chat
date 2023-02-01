import React from "react";
import { Sidebar } from "../sidebar";
// import { auth } from "../../firebase";

// import { Login } from "../login";
import '../../../src/style.css'
// import { Chatroom } from "../chatroom";


export const IndexPage = () => {
  // const [User, setUser] = useState(null);

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
  // }, [User]);
  return (
    <div className="home">
     
        <div className="container" >
          <Sidebar />
        
  
        </div>
      
    </div>
  );
};
