import './BlogSection.css'
import blogPosts from './data/blogPosts'
import { useState } from 'react'

export default function BlogSection (){

    const [posts, setPosts] = useState(blogPosts)

    function filterPosts (e){
        let query = e.target.value.toLowerCase()
        let filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(query))
        setPosts(filteredPosts)
    }

    return (
        <div className='blogsection__container'>
            
            <div className="blogsection__search">
                <input type="text" placeholder='Search by title'
                onChange={e => filterPosts(e)}
                />
            </div>

            {posts.map(post => {
                return (
                    <div className="blogsection__post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}