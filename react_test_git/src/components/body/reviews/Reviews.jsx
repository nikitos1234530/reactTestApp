import React from 'react'
import imgEllipse1 from '../../../img/Ellipse 1.png'
import imgEllipse2 from '../../../img/Ellipse 2.png'
import imgEllipse3 from '../../../img/Ellipse 3.png'
import imgEllipse4 from '../../../img/Ellipse 4.png'
import './reviews.css'
import styles from '../article/article.module.css'

const Reviews = () => {
  return (
    <div className='reviews'>
      <h2>
        We strive to provide the very best in
        <span className={styles.colorYellow}>automation</span>,
        <span className={styles.colorGrey}>coupled with a personal, human touch.</span>
      </h2>
      <div className='reviews-cards'>
        <div className='reviews-cards__first-block'>
          <div className='reviews-cards__card'>
            <div className='card__title'>
              <div>
                <img src={imgEllipse1} />
              </div>
              <div className='card__name'>
                <h4>Cody Fisher</h4>
                <h5>South Dakota</h5>
              </div>
            </div>
            <div>
              <p>Fantastic service and great value for money!</p>
            </div>
          </div>
          <div
            className='reviews-cards__card'
            style={{background: '#fff', height: '480px'}}
          >
            <div className='card__title'>
              <div>
                <img src={imgEllipse3} />
              </div>
              <div className='card__name'>
                <h4>Theresa Webb</h4>
                <h5>Greece</h5>
              </div>
            </div>
            <div>
              <p>
                Would definitely recommend to anyone looking for an efficient
                service.
              </p>
            </div>
          </div>
        </div>
        <div className='reviews-cards__second-block'>
          <div
            className='reviews-cards__card'
            style={{background: '#f1e0fd', height: '480px'}}
          >
            <div className='card__title'>
              <div>
                <img src={imgEllipse2} />
              </div>
              <div className='card__name'>
                <h4>Eleanor Pena</h4>
                <h5>Guinea</h5>
              </div>
            </div>
            <div>
              <p>
                Thank you so much for taking the time to share your experience
                with others.
                <br />
                So pleased you found the service helpful. Wishing you all the
                best in your next chapter!
              </p>
            </div>
          </div>
          <div className='reviews-cards__card'>
            <div className='card__title'>
              <div>
                <img src={imgEllipse4} />
              </div>
              <div className='card__name'>
                <h4>Esther Howard</h4>
                <h5>Iceland</h5>
              </div>
            </div>
            <div>
              <p>Well explained and a fast delivery :)</p>
            </div>
          </div>
        </div>
      </div>
      <button className='btn'>Tell your story</button>
    </div>
  )
}

export default Reviews
