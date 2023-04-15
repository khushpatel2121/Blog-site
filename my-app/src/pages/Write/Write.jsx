import React, { useContext,useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'
import { Context } from '../../Context/context';
import './Write.css'
import axios from "axios";

function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc]= useState("");
    const [file,setFile]= useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const newPost ={
            username:user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo=filename;
            try{
                await axios.post("/upload",data);
            }catch(err){

            }
        }
        try{
          const res  = await axios.post("/posts", newPost);
          window.location.replace("/post/"+res.data._id)
        }catch(err){

        }
    }
    return (
        <div className='write'>
        {file && (
            <img
            src={URL.createObjectURL(file)}
            className='Write-img'
            alt='Blog-img'
        />
        )}
      
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='writeFromGroup'>
                    <label htmlFor='fileInput'>
                        <BsPlusCircle className='writeIcon' />
                    </label>
                    <input id='fileInput' type='file' 
                    onChange={(e)=>setFile(e.target.files[0])}
                    style={{ display: 'none' }}></input>
                    <input className='Write-Title'
                        placeholder='Title'
                        type='text'
                        autoFocus={true}
                        o
                        onChange={e=>setTitle(e.target.value)}
                    ></input>
                </div>
                <div className='writeFromGroup'>
                    <textarea className='writeText'
                        placeholder='Tell your story...'
                        type='text'
                        autoFocus={true}
                        onChange={e=>setDesc(e.target.value)}
                    />
                </div>
                <button className='WriteSubmit' type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
