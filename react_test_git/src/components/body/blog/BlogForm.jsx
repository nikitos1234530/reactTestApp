import React, {useState} from 'react'
import MyButton from '../../UI/button/MyButton'
import MyInput from '../../UI/input/MyInput'


const BlogForm = ({create}) => {

  const [blog, setBlog] = useState({title: '', body: '', date: ''})


  const addNewBlog = (e) => {
    e.preventDefault()
    const newBlog ={
      ...blog, id: Date.now(), date:new Date().toLocaleString()
    }
    create(newBlog)
    setBlog({title: '', body: '', date: ''})
  }
  return (
    <form className='form-blogs'>
      <div className='blog-content__title'>
        <label>Заголовок</label>
        <br />
        <MyInput
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          type='text'
        />
        <span className='blog-title__valid'>
          Заголовок должен начинаться с большой буквы, одно слово.
        </span>
      </div>
      <div className='blog-content__info'>
        <label>Содержимое</label>
        <br />
        <MyInput
          value={blog.body}
          onChange={(e) => setBlog({ ...blog, body: e.target.value })}
          type='text'
        />
      </div>
      <MyButton style={{marginTop: '15px'}} onClick={addNewBlog}>Создать блог</MyButton>
    </form>
  )
}

export default BlogForm
