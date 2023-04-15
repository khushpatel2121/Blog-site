import React from 'react'
import './header.css'
import bg from "./bg.jpeg"

function Header() {
  return (
    <div className='header'>
<div className='header-title'>
<span className='title-sm'>React & Node</span>
<span className="title-lg">Blog</span>
</div>
<img
    src={bg}
    className='title-img'
    alt="image"
/>
    </div>
  )
}

export default Header 
