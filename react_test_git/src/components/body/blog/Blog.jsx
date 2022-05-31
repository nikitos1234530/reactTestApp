import React, { useState } from 'react'
import './blog.css'
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import MySelect from '../../UI/select/MySelect'
import MyInput from '../../UI/input/MyInput'

const Blog = () => {
  const emptyStorage = {
    myBlog: {
      blogs: [],
      searches: {},
    },
  }
  if (localStorage.getItem('myBlog') === null) {
    localStorage.setItem('myBlog', JSON.stringify(emptyStorage.myBlog))
  }

  const MOCK_BLOGS = JSON.parse(localStorage.getItem('myBlog')).blogs

  const [blogs, setBlogs] = useState(MOCK_BLOGS)

  const [searchQuery, setSearchQuery] = useState('')

  const inputSearch = (e) => {
    setSearchQuery(e.target.value)
    searchedBlogs()
  }

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // функция вывода в рендер либо основной массив с блогами, либо массив который достается из кеша
  const searchedBlogs = () => {
    const myBlog = JSON.parse(localStorage.getItem('myBlog'))
    const localsSearch = myBlog.searches
    for (let ind in localsSearch) {
      if (ind.toLowerCase() === searchQuery.toLowerCase()) {
        return localsSearch[ind]
      }
    }
    return filteredBlogs
  }

  // функция поиска блогов в кеше? и если они остутсвуют? добавляет вэлюе как ключ6 и наденый блоги как значения
  const localSearchBlogs = (blogs) => {
    const myBlog = JSON.parse(localStorage.getItem('myBlog'))
    const existSearchValue = searchQuery !== ''
    const localsSearch = myBlog.searches
    if (filteredBlogs.length !== 0 && existSearchValue) {
      for (let ind in localsSearch) {
        if (
          ind.toLowerCase() === searchQuery.toLowerCase() &&
          localsSearch[ind].length === filteredBlogs.length
        ) {
          return localsSearch[ind]
        }
      }
      localStorage.setItem(
        'myBlog',
        JSON.stringify({
          ...myBlog,
          searches: { ...myBlog.searches, [searchQuery]: filteredBlogs },
        })
      )
    }
  }

  localSearchBlogs(blogs)

  const [selectedSort, setSelectedSort] = useState('')
  // функции сортировки блогов
  const sortBlogs = (sort) => {
    setSelectedSort(sort)
    if (sort === 'titleA-Z') {
      function sorted(a, b) {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      }
      blogs.sort(sorted)
    }
    if (sort === 'titleZ-A') {
      function sorted(a, b) {
        if (a.title < b.title) {
          return 1
        }
        if (a.title > b.title) {
          return -1
        }
        return 0
      }
      blogs.sort(sorted)
    }

    if (sort === 'id+') {
      function sorted(a, b) {
        if (a.id < b.id) {
          return -1
        }
        if (a.id > b.id) {
          return 1
        }
        return 0
      }
      blogs.sort(sorted)
    }

    if (sort === 'id-') {
      function sorted(a, b) {
        if (a.id < b.id) {
          return 1
        }
        if (a.id > b.id) {
          return -1
        }
        return 0
      }
      blogs.sort(sorted)
    }
    const myBlog = JSON.parse(localStorage.getItem('myBlog'))
    localStorage.setItem('myBlog', JSON.stringify({ ...myBlog, blogs: blogs }))
  }
  // функция создания блогов
  const createBlog = (newBlog) => {
    const myBlog =
      JSON.parse(localStorage.getItem('myBlog')) || emptyStorage.myBlog

    setBlogs([...blogs, newBlog])

    localStorage.setItem(
      'myBlog',
      JSON.stringify({
        ...myBlog,
        blogs: [...myBlog.blogs, newBlog],
      })
    )
  }
  // функция удаления блогов и удаления результатов кеша по данному блогу
  const removeBlog = (blog) => {
    setBlogs(blogs.filter((b) => b.id !== blog.id))
    const myBlog = JSON.parse(localStorage.getItem('myBlog'))
    let deleteLocalBlog = myBlog.blogs
    let changedLocal = deleteLocalBlog.filter((b) => blog.id !== b.id)
    let deleteLocalSearches = myBlog.searches
    for (let ind in deleteLocalSearches) {
      let deepArr = deleteLocalSearches[ind]
      for (let j = 0; j < deepArr.length; j++) {
        let deepDeepArr = deepArr[j]
        if (deepDeepArr.id === blog.id) {
          deepArr.splice(j, 1)
          if (deepArr.length < 1) {
            delete deleteLocalSearches[ind]
          }
        }
      }
    }

    localStorage.setItem(
      'myBlog',
      JSON.stringify({ ...myBlog, searches: deleteLocalSearches })
    )

    localStorage.setItem(
      'myBlog',
      JSON.stringify({ ...myBlog, blogs: changedLocal })
    )
  }
  /////////////////

  return (
    <div>
      <div className='blog'>
        <div className='blog-navbar'>
          <h4 className='blog-title'>Запись в блоге.</h4>
          <div className='blog-sorting'>
            <MySelect
              value={selectedSort}
              onChange={sortBlogs}
              defaultValue='Сортировка'
              options={[
                { value: 'titleA-Z', name: 'По алфавиту A-Z' },
                { value: 'titleZ-A', name: 'Против алфавита' },
                { value: 'id+', name: 'По дате новые' },
                { value: 'id-', name: 'По дате старые' },
              ]}
              style={{ marginBottom: '10px' }}
            />
            <div className='sort-search-input'>
              <MyInput
                className='sort-search'
                value={searchQuery}
                onChange={inputSearch}
                placeholder='Search'
              />
            </div>
          </div>
        </div>
        <BlogForm create={createBlog} />
      </div>
      {filteredBlogs.length !== 0 ? (
        <BlogList blogs={searchedBlogs()} remove={removeBlog} />
      ) : (
        <div
          style={{
            color: 'white',
            fontSize: '1.6em',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Список блогов пуст
        </div>
      )}
    </div>
  )
}

export default Blog
