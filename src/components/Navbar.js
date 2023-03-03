import React,{useState} from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../../src/style.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export const Navbar = ({ onClick,clicktoContact,clicktoChat,style }) => {
  const history = useNavigate();
  const BackToLogin = () => {
    auth.signOut();
    history("/login");
  };

  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  //  useEffect(() => {
  //   const delayDebounce = setTimeout(() => {
  //     if (value.length > 1) {
  //       const filterData = chats.filter((contact) => {
  //         return contact.username.toLowerCase().includes(value.toLowerCase());
  //       });
  //       console.log("filterDta", filterData);
  //       setFilterData(filterData);
  //     }
  //   }, 800);

  //   return () => clearTimeout(delayDebounce);
  // }, [value]);

  return (
    <div className="navbar_container">
      {/* <Modal open={open} onClose={()=>setOpen(false)}>
        <div className='search_input'>
          <input onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Search Contact" type="text"/>
    
        </div>
      </Modal> */}
      <div className="app_logo">
        <h2> BubblyChat</h2>
        <button onClick={BackToLogin} className="backBtn">
          Log Out
        </button>
      </div>
      <div className="nav_items">
        <div className="profile_image">
          <div onClick={()=>history("/profile")}>
            
            <Avatar alt="Aishwariya" />
          </div>
        </div>
        {/* <a className="nav_menu" href="/chatpage" onClick={clicktoChat}>
          Chat
        </a>
        <a style={style} className="nav_menu" href="#" onClick={clicktoContact}>
          Contacts
        </a> */}

<Box sx={{ borderBottom: 0, borderColor: 'white' }}>
  <Tabs TabIndicatorProps={{
    style: {
      backgroundColor: "white"
    }
  }} value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab  style={{color:"white"}} label="Groups" href="/chatpage" onClick={clicktoChat} />
    <Tab  style={{color:"white"}} label="Contacts" href="#" onClick={clicktoContact}  />
  
  </Tabs>
</Box>
        <button onClick={onClick} className="search">
          <SearchIcon></SearchIcon>
        </button>
      </div>
    </div>
  );
};
