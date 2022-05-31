import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({blogs, remove}) => {
  return (
    <div>
            {blogs.map((blog, index)=> (
        <BlogItem remove={remove} number={index + 1} blog={blog} key={blog.id}/> ))}
    </div>
  )
}

export default BlogList