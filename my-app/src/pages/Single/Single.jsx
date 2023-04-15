import React from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'
import './Single.css'

function Single() {
  return (<>
    
    <div className='Single'>
      <SinglePost/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Single
