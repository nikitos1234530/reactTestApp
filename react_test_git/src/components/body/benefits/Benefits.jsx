import React from 'react'
import styles from '../article/article.module.css'
import './benefits.css'
import imgWorld from '../../../img/the_world.svg'
import imgPrivacy from '../../../img/privacy.svg'
import imgFastAnd from '../../../img/fast_and.svg'

const Benefits = () => {
  return (
    <div>
      <h2>
        Change.It is an exciting online
        <span className={styles.colorYellow}>name changing</span> service
        <span className={styles.colorGrey}>
          that simplifies the process of how to change your name.
        </span>
      </h2>
      <div className='benefits'>
        <div className='benefits-card'>
          <img src={imgWorld} alt='benefits-1' />
          <h4>The whole world!</h4>
          <p>We work all over the world, so it doesn't matter where you are.</p>
        </div>
        <div className='benefits-card'>
          <img src={imgPrivacy} alt='benefits-2' />
          <h4>Privacy and data security!</h4>
          <p>
            Your data is encrypted and stored on a secure portal which only you
            can access.
          </p>
        </div>
        <div className='benefits-card'>
          <img src={imgFastAnd} alt='benefits-3' />
          <h4>Fast and cheap!</h4>
          <p>Name change journey with us for as little as £45.95.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
