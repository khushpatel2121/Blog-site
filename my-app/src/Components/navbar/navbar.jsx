import React, { useContext } from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Context } from '../../Context/context'
import './navbar.css'

const Navbar = () => {
    const {user,dispatch} = useContext(Context);
    const PF ="http://localhost:8800/images/"

    const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
       
    }
    return (
 
       
    
        <div className='Navbar'>
            <div className='nav-left'>
                <ul className='pr'>
                    <li className='social-icons'><AiFillFacebook /></li>
                    <li className='social-icons'><AiFillTwitterSquare /></li>
                    <li className='social-icons'><AiFillInstagram /></li>
                    <li className='social-icons'><AiFillLinkedin /></li>
                </ul>
                </div>
                <div className='nav-center'>
                    <ul className='main-menu'>
                        <li className='nav-links'>
                            <Link className='link' to="/">Home</Link>
                        </li>
                        <li className='nav-links'>
                            <Link className='link' to="/">About</Link>
                        </li>
                        <li className='nav-links'>
                            <Link  className='link'to="/">Contact</Link>
                        </li>
                        <li className='nav-links'>
                            <Link className='link' to="/Write">Write</Link></li>
                        {user && <li className='nav-links' onClick={handleLogout}><Link className='link'>LOGOUT</Link></li>}
                    </ul>
                </div>
                <div className='nav-right'>
                    {user ? (
                        <Link to="/Setting">
                            <img
                                className='nav-img'
                                src={PF + user.ProfilePic}
                                alt=''
                            />
                        </Link>
                    ) : (
                        <ul className='main-menu'>
                            <li className='nav-links'><Link  className='link' to='/Login'>Login</Link></li>
                            <li className='nav-links'><Link className='link' to='/Register'>Register</Link></li>
                        </ul>
                    )}
                    <AiOutlineSearch />
                </div>

           
        </div>
    )
}

export default Navbar
