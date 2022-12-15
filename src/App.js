
import './App.css';
import { Login } from './components/login';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import { IndexPage } from './components/index-page';

function App() {
  return (
   <div className='app_wrapper' style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(white, pink, #7580005c, #0000ff9e)"}}>
       <Router>
   <Routes><Route  index element={<Login/>}></Route></Routes> 
   <Routes>   <Route path='/login' element={<Login/>}></Route></Routes>
   <Routes>   <Route path='/chatpage' element={<IndexPage/>}></Route></Routes>
{/* <Routes>   <Route path='/layout' element={<Layout/>}></Route></Routes> */}


    </Router></div>
  );
}

export default App;
