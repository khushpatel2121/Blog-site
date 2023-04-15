import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Navbar from "./Components/navbar/navbar";
import Home from "./pages/home/home"
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { Context } from "./Context/context";

function App() {
  const {user} =useContext(Context);
  return (<>

<div className="App">
<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={ user ? <Home /> : <Register />}/>
      <Route path="/Setting" element={ user ? <Setting /> : <Register />}/>
      <Route path="/Single" element={<Single/>}/>
      <Route path="/Write" element={ user ? <Write/> : <Register />}/>
      <Route path="/Login" element={ user ? <Home /> : <Login />}/>
      <Route path="/post/:postID" element={<Single/>}/>
    </Routes>
</BrowserRouter>
  
   </div>
  </>
   
  );
}

export default App;
