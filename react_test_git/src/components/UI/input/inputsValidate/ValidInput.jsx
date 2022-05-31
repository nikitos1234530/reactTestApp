import React from 'react'
import styles from './validInput.module.css'

const ValidInput = (props) => {
  return (
        <input className={styles.input} {...props} />
  )
}

export default ValidInput
