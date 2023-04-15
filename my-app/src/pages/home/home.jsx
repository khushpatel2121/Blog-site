import {useEffect, useState} from 'react'
import Header from '../../Components/Header/header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import './home.css'
import axios from "axios";
import { useLocation } from 'react-router-dom'

function Home() {
const[posts,setPosts] = useState([]);
const {search} = useLocation();


useEffect(()=>{
  const fetchPosts = async ()=>{
    const res = await axios.get("/posts"+search);
    setPosts(res.data);
  }
  fetchPosts();
},[search]);


  return (
    <>
    <Header/>
    <div className='home'>

     <Posts posts={posts}/>
     <Sidebar/>
    </div>
    </>
  )
}

export default Home
