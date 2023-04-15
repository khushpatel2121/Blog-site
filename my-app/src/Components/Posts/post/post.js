import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
function Post({ post }) {

    const PF ="http://localhost:8800/images/";
    

    return (
        <div className='post'>
            {
                post.photo &&
                <img
                    src={PF+post.photo}
                    className='post-img'
                />
            }

            <div className='post-info'>
                <div className='post-cats'>
                    {post.categories.map((c,p) => (
                        <span key={p} className='post-cat'>{c.name}</span>
                    ))}



                    <span className='post-cat'><Link className='post-link' path='/'>Tech</Link></span>
                </div>
                <Link to={`/post/${post._id}`} className='post-Tlink'>
                    <span className='post-title'>

                        {post.title}

                    </span>
                </Link>
                <hr />
                <span className='post-date'>{new Date(post.createdAt).toDateString()}
                </span>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default Post
