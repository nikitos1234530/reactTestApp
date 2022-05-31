import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer className='footer'>
      <h3>Newsletter</h3>
      <input type='email' placeholder='Enter Your Email' />
      <div className='footer-title'>
        <div className='copy'>
          <p>© 2022 Change.it Ltd. All Rights Reserved</p>
        </div>
        <div>
          <ul className='faq'>
            <li>
              <a href='#'>Divorce</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Deed Poll Online</a>
            </li>
            <li>
              <a href='#'>Terms</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
