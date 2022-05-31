import React from 'react'
import './blog.css'

const BlogItem = (props) => {
  return (
    <div
      className='new-blog'
      // data-sort='${item.title}'
      // data-sort-date='${item.dateNow}'
    >
      <div className='new-blog-nav'>
        <h5 className='new-blog__title'>
          {props.number}. {props.blog.title}
        </h5>
        <button
          onClick={() => props.remove(props.blog)}
          className='cl-btn-4'
        ></button>
      </div>
      <p className='new-blog__info'>{props.blog.body}</p>
      <p className='new-blog__date'>{props.blog.date}</p>
    </div>
  )
}

export default BlogItem
