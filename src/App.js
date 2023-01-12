
import './App.css';
import { Login } from './components/login';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import { IndexPage } from './components/index-page';
import { Chatroom } from './components/chatroom';

function App() {

  return (
   <div className='app_wrapper' style={{height:"100vh",display:"flex",background:"linear-gradient(white, pink, #7580005c, #0000ff9e)",overflowY:"scroll"}}>
           <Router>
   <Routes><Route  index element={<IndexPage/>}></Route></Routes> 
   <Routes>   <Route path='/login' element={<Login/>}></Route></Routes>
   <Routes>   <Route path='/chatpage' element={<IndexPage/>}></Route></Routes>
<Routes>   <Route path="/chatpage/:id/:username" element={<Chatroom/>}></Route></Routes>


    </Router> 
</div>
  );
}

export default App;
