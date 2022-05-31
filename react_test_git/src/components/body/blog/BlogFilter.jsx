import React from 'react'
import MySelect from '../../UI/select/MySelect'
import MyInput from '../../UI/input/MyInput'

const BlogFilter = ({filter, setFilter}) => {
  return (
    <div className='blog-sorting'>
      <MySelect
        value={filter.sort}
        onChange={sortBlogs => setFilter({...filter, sort: sortBlogs})}
        defaultValue='Сортировка'
        options={[
          { value: 'titleA-Z', name: 'По алфавиту A-Z' },
          { value: 'titleZ-A', name: 'Против алфавита' },
          { value: 'id+', name: 'По дате новые' },
          { value: 'id-', name: 'По дате старые' },
        ]}
      />
      <div className='sort-search-input'>
        <MyInput
          className='sort-search'
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder='Search'
          // maxlength='13'
        />
      </div>
    </div>
  )
}

export default BlogFilter
