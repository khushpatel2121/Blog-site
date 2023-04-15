import {useState} from 'react'
import './Register.css'
import axios from 'axios';
import {Link} from "react-router-dom"


function Register() {

  const [username,setUsername]= useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const[error,setError] = useState(false);

  const handlechange = async (e)=>{
    e.preventDefault();
    setError(false);
    try {
        const res = await axios.post("/auth/register",{
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
    } catch (err) {
      setError(true)
    }

  };


  return (
    <div className='Register'>
      <form className="registerForm" onSubmit={handlechange}>
<h1>Register</h1>
<label>Username</label>
<input placeholder='Username' type="text"
  onChange={(e)=>setUsername(e.target.value)}
/>
<label>Email</label>
<input placeholder='Emial' type="text"
  onChange={(e)=>setEmail(e.target.value)}
/>
<label>Password</label>
<input placeholder='Password' type="password"
  onChange={(e)=>setPassword(e.target.value)}
/>
<button type='submit' className="registerButton">Register</button>
      </form>
    <Link to="/login" className="link">
    <button className="registerLoginButton">Login</button>
    </Link>  
      {error && <span>Already a user please LOGIN !!</span>}
    </div>
  )
}

export default Register
