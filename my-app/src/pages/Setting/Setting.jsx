import React, { useContext, useState } from 'react'
import './Setting.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { MdAccountCircle } from 'react-icons/md'
import { Context } from '../../Context/context'
import axios from 'axios'

function Setting() {
    const[file,setFile] = useState(null);
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const {user,dispatch} = useContext(Context);
    const PF ="http://localhost:8800/images/"

    const handleSubmit = async(e)=>{
            e.preventDefault();
            dispatch({type:"UPDATE_START"});
            const updatedUser ={
                userId : user._id,
                username,
                email,
                password
            };
            if(file){
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name",filename);
                data.append("file",file);
                updatedUser.ProfilePic=filename;
                try{
                  await axios.post("/upload",data);
                    
                }catch(err){
    
                }
            }
            try{
            const res = await axios.put("/user/" + user._id,updatedUser);
             setSuccess(true);
             dispatch({type:"UPDATE_SUCCESS",payload: res.data})
            }catch(err){
              dispatch({type:"UPDATE_FAILURE"});
            }
        }
    return (
        <div className='Setting'>
            <div className='Setting-wrapper'>
                <div className='SettingTitle'>
                    <span className='update'>Update your account</span>
                    <span className='delete'>Delete Account</span>
                </div>
                <form className='SettingForm' onSubmit={handleSubmit}>
                    <label>Profile photo</label>
                    <div className='SettingPP'>
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.ProfilePic}
                            className='Setting-img'

                        />
                        <label className='SettingPPicon' htmlFor='fileInput'>
                            <MdAccountCircle />
                        </label>
                       
                        <input id='fileInput'
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                           onChange={(e)=>setFile(e.target.files[0])}
                        ></input>
                       </div>
                          <label>Username</label>
                          <input className='inputs' placeholder={user.username}  onChange={(e) => setUsername(e.target.value)} type="text" name='name'></input>
                          <label>Email</label>
                          <input className='inputs' placeholder={user.email}  onChange={(e) => setEmail(e.target.value)} type="text" name='Email'></input>
                          <label>Password</label>
                          <input className='inputs' placeholder='Password'  onChange={(e) => setPassword(e.target.value)} type="password" name='password'></input>
                       
                 <button className='SettingSubmit' type='submit'>Update</button>
                 {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting
