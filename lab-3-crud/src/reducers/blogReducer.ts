import type { Blog } from "../types/blog.types"

type BlogAction = 
    | { type: "add", payload: Blog }
    | { type: "delete", payload: {id: number} }
    | { type: "edit", payload: Omit<Blog, 'published'> }

export const blogReducer =  (blogs: Blog[], action: BlogAction) => {
    switch(action.type) {
        case "add":
          return [
            ...blogs,
            action.payload
          ]
        case "delete":
            return blogs.filter(blog => action.payload.id !== blog.id)

        case "edit":
            return blogs.map(blog =>
                action.payload.id === blog.id ?
                {
                  ...blog,
                  title: action.payload.title,
                  content: action.payload.content
                } :
                blog
            )
        default:
          return blogs
    }
}