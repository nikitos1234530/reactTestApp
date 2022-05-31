import React from 'react'
import styles from '../../body/article/article.module.css';
import './slogan.css'

const Slogan = () => {
  return (
    <div className="slogan">
    <h2>
      Name change
      <p>made <span className={styles.colorYellow}>easy</span></p>
    </h2>
  </div>
  )
}

export default Slogan