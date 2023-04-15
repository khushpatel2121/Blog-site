import React, { useContext, useEffect , useState} from 'react'
import './SinglePost.css'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import { Context } from '../../Context/context'

function SinglePost() {
const location = useLocation();
const [post,setPost] = useState([]);
 const path= location.pathname.split("/")[2];
 const PF = "http://localhost:8800/images/";
 const {user} = useContext(Context);
 const [title,setTitle]= useState("");
 const [desc,setDesc] = useState("");
 const [update,setUpdate] =useState(false);



useEffect(()=>{
   const getPost = async() =>{
    const res = await axios.get("/posts/"+ path);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc)
   };
   getPost()
},[path])

const handleDelete = async ()=> { 
    try{
      await axios.delete(`/posts/${post._id}`,{
        data:{username:user.username},
      });
      window.location.replace("/");
    }catch(err){
    
    }
     }

const handleUpdate = async()=>{
  try{
    await axios.put(`/posts/${post._id}`,{
      username : user.username,
      title,
      desc,
    });
    setUpdate(false)
  }catch(err){}
}

    return (
        <div className='SinglePost'>
            <div className='Single-wrapper'>
            {post.photo && <img
                    src={PF+post.photo}
                    className='Single-img'
                />}
                {update ? (<input
                  type="text"
                  value={title}
                  className="singlePostTitleInput"
                  autoFocus
                  onChange={(e)=>setTitle(e.target.value)}
                />):(
                     <h1 className='Single-title'>{title}
                   {post.username === user?.username &&  (<div className='Single-edit'>
                        <AiFillEdit onClick={()=>setUpdate(true)} className='Single-icons' />
                        <RiDeleteBin5Line onClick={handleDelete} className='Single-icons'/>
                    </div>)}
                </h1>
                )}
              
                <div className='single-info'>
                <Link to={`/?user=${post.username}`} className="link">
                <span className='single-author'>Author : <b>{post.username}</b></span>
                </Link>
                
                <span className='single-date'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <br></br>
                {
                  update ? (
                    <textarea
                    type="text"
                      value={desc}
                      className="singlePostDescInput"
                      onChange={(e)=>setDesc(e.target.value)}
                    />
                  ):(
                    <p className="singlePostDesc"> 
                    {desc}
                  </p>
              
                  )
                }
                {
                  update && (
                    <button className='updateButton' onClick={handleUpdate}>
                      Update
                    </button>
                  )
                }
                   
            </div>

        </div>
    )
}

export default SinglePost
