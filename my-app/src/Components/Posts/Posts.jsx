import './Posts.css'
import Post from './post/post'

function Posts({posts}) {
  return (
    <div className='Post'>
    {
      posts.map((p,ps)=>(
        <Post key={ps} post={p}/>
      ))
    }
    
    
    </div>
  )
}

export default Posts
