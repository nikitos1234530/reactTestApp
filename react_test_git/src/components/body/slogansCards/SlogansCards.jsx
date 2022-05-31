import React from 'react'
import './slogansCards.css'

const SlogansCards = () => {
  return (
    <div className='slogans-cards'>
      <div className='slogans-card' style={{background: '#f1e0fd'}}>
        <h4>Why should I choose Change.it?</h4>
        <p>
          We strive to provide the very best in automation, coupled with a
          personal, human touch. Profiles are usually populated within 60
          seconds of checkout.
        </p>
      </div>
      <div className='slogans-card' style={{background: '#eafc9c'}}>
        <h4>Will my name change instantly after using this service?</h4>
        <p>
          No. We can only advise you on how to change your name and equip you
          with the tools required to go about it.
        </p>
      </div>
      <div className='slogans-card' style={{background: '#fff'}}>
        <h4>What kind of companies do I need to notify?</h4>
        <p>
          As well as helping you through the process of how to change your name,
          NameSwitch makes it easier to identify which organisations and
          companies you’ll need to notify about your impending name change.
        </p>
      </div>
      <div className='slogans-card text-center' style={{background: '#3943f5'}}>
        <p>Ask a Question</p>
      </div>
    </div>
  )
}

export default SlogansCards
