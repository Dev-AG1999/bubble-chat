import React from 'react'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import "../../src/style.css";
import { useNavigate } from 'react-router-dom';


export const Navbar=({onClick})=> {
  const history = useNavigate();
 const BackToLogin = ()=>{
  history("/login")
 }

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
    <div className='navbar_container'>
      {/* <Modal open={open} onClose={()=>setOpen(false)}>
        <div className='search_input'>
          <input onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Search Contact" type="text"/>
    
        </div>
      </Modal> */}
   <div className='app_logo'>
   <h2> BubblyChat</h2>
   <button onClick={BackToLogin} className='backBtn'>◀ Back</button>
   </div>
<div className='nav_items'>
<div className='profile_image'>
      <a href="/profile">  <Avatar alt='Aishwariya'/></a>
    </div>
    <a className='nav_menu' href='/chatpage'>Chat</a>
<button onClick={onClick} className='search'><SearchIcon></SearchIcon></button>
</div>
    </div>
  )
}

