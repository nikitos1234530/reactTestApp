import React from 'react'
import styles from '../../styles/body.module.css'
import Header from '../header/Header'
import Article from '../body/article/Article'
import Footer from '../footer/Footer'

const Container = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Header />
        <Article />
        <Footer />
      </div>
    </div>
  )
}

export default Container