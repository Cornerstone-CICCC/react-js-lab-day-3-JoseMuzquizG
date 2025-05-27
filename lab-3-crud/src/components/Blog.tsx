import { useReducer } from "react"
import { blogReducer } from "../reducers/blogReducer"
import { Link } from "react-router-dom"

const Blog = () => {

    const [blogs, dispatch] = useReducer(blogReducer, [
        {id: 1, title: "my first blog", content: "this is my first blog", published: true}
    ])

  return (
    <>
      <div>
        <h2>All the blogs</h2>
        <button>Add new Blog</button>  
      </div>  
      <ul className="p-3">
        {blogs.map(blog => (
            <li key={blog.id} className="flex justify-between">
              <strong><Link to='/blog/:id'>{blog.title}</Link></strong>
              <div className="flex gap-3">
                <button className="border rounded-md p-2 cursor-pointer hover:bg-gray-100">Edit</button>
                <button className="border rounded-md p-2 cursor-pointer hover:bg-gray-100">Delete</button>
              </div>
            </li>
            
        ))}
      </ul>
    </>

  )
}

export default Blog