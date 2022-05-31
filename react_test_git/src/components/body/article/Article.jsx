import React from 'react'
import Benefits from '../benefits/Benefits'
import Slogan from '../slogan/Slogan'
import SlogansCards from '../slogansCards/SlogansCards'
import Reviews from '../reviews/Reviews'
import Blog from '../blog/Blog'
import CheckList from '../checkList/CheckList'

const Article = () => {
  return (
    <article className='article'>
      <Benefits />
      <Slogan />
      <SlogansCards />
      <Reviews />
      <Blog />
      <CheckList />
    </article>
  )
}

export default Article