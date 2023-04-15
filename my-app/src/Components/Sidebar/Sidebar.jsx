import './Sidebar.css'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiOutlineSearch } from "react-icons/ai"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

function Sidebar() {
const[cats,setcats] = useState([]);


useEffect(()=>{
const getCats = async()=>{
  const res = await axios.get("/category");
  setcats(res.data);
}
getCats();
},[])

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebar-title'>About Me</span>
        <img
          
            src='https://images.pexels.com/photos/7828323/pexels-photo-7828323.jpeg?auto=compress&cs=tinysrgb&w=800'
            className='side-img'
            alt='img'
        />
        <p className='para'>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarListTitle'>  CATEGORIES</span>
        <ul className='Sidebarlist'>
        {cats.map((c,key)=>(
          <Link key={key} to={`/?cat=${c.name}`} className="link">
          <li key={key} className='sidebarlistItem' >{c.name}</li>
          </Link>
        ))}
          
            
        </ul>

      </div>
      <div className='sidebarItem'>
     <span className='sidebarTitle'>Follow Me</span>
     <ul className='pr'>
                    <li className='social-icons'><AiFillFacebook /></li>
                    <li className='social-icons'><AiFillTwitterSquare /></li>
                    <li className='social-icons'><AiFillInstagram /></li>
                    <li className='social-icons'><AiFillLinkedin /></li>
                </ul>
      </div>
    </div>
  )
}

export default Sidebar
