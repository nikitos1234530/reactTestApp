import React from 'react'
import './checkList.css'
import Form from './Form'

const CheckList = () => {

  return (
    <div className='checklist'>
      <div className='checklist-left-block'>
        <h3>Get your free Change.it checklist</h3>
      </div>

      <div className='checklist-right-block'>
      <Form />
      </div>
    </div>
  )
}

export default CheckList
