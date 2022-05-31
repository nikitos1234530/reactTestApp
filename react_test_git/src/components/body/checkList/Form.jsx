import React, { useState, useEffect } from 'react'
import ValidInput from '../../UI/input/inputsValidate/ValidInput'

const Form = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()
  const [firstNameDirty, setFirstNameDirty] = useState(false)
  const [lastNameDirty, setLastNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [dateDirty, setDateDirty] = useState(false)
  const [firstNameError, setFirstNameError] = useState(
    'Это поле должно содержать имя в формате John'
  )
  const [lastNameError, setLastNameError] = useState(
    'Это поле должно содержать фамилию в формате Smith'
  )
  const [emailError, setEmailError] = useState(
    'Это поле должно содержать E-Mail в формате example@site.com'
  )
  const [dateError, setDateError] = useState(
    'Это поле должно содержать дату в дд.мм.гггг. Не позднее сегодняшней даты. И не старше 2023 года.'
  )
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (firstNameError || lastNameError || emailError || dateError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [firstNameError, lastNameError, emailError, dateError])

  const firstNameHandler = (e) => {
    setFirstName(e.target.value)
    const re = /^[A-ZА-Я][a-zа-я\.]{1,20}$/
    if (!re.test(String(e.target.value))) {
      setFirstNameError('Некорректное имя')
    } else {
      setFirstNameError('')
    }
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
    const re = /^[A-ZА-Я][a-zа-я\.]{1,20}$/
    if (!re.test(String(e.target.value))) {
      setLastNameError('Некорректная фамилия')
    } else {
      setLastNameError('')
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емеил')
    } else {
      setEmailError('')
    }
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
    const re = /[0-9]{2}[.][0-9]{2}[.][0-9]{4}$/
    if (!re.test(String(e.target.value))) {
      setDateError(
        'Некорректная Дата. Это поле должно содержать дату в дд.мм.гггг. Не позднее сегодняшней даты. И не старше 2023 года.'
      )
    } else {
      setDateError('')
    }
    let nowDate = e.target.value
    const arr = nowDate.split('.')
    arr.splice(0, 2, arr[1] - 1, arr[0])
    let valueDate = new Date(arr[2], arr[0], arr[1])
    let today = new Date()
    if (+valueDate - +today < 0) {
      // Проверяем, корректность введенной даты.
      setDateError(
        'Некорректная Дата. Это поле должно содержать дату в дд.мм.гггг. Не позднее сегодняшней даты. И не старше 2023 года.'
      )
    } else if (arr[0] > 12 || arr[1] > 31 || arr[2] > today.getFullYear() + 1) {
      setDateError(
        'Некорректная Дата. Это поле должно содержать дату в дд.мм.гггг. Не позднее сегодняшней даты. И не старше 2023 года.'
      )
    } else {
      setDateError('')
    }
  }

  const blurHandler = (e) => {
    if (e.target.name === 'firstName') {
      setFirstNameDirty(true)
    }
    if (e.target.name === 'lastName') {
      setLastNameDirty(true)
    }
    if (e.target.name === 'email') {
      setEmailDirty(true)
    }
    if (e.target.name === 'date') {
      setDateDirty(true)
    }
  }

  return (
    <form className='form-inputs'>
      <div className='checklist__input'>
        <label>
          First Name
          <ValidInput
            onBlur={blurHandler}
            onChange={firstNameHandler}
            value={firstName || ''}
            type='text'
            placeholder='Enter Your First Name'
            name='firstName'
            className='js-input-firstName js-input'
          />
        </label>
        {firstNameDirty && firstNameError && (
          <span className='input-firstname'>{firstNameError}</span>
        )}
      </div>
      <div className='checklist__input'>
        <label>
          Last Name
          <br />
          <ValidInput
            onBlur={blurHandler}
            onChange={lastNameHandler}
            value={lastName || ''}
            type='text'
            placeholder='Enter Your Last Name'
            name='lastName'
            className='js-input'
          />
        </label>
        {lastNameDirty && lastNameError && (
          <span className='input-lastname'>{lastNameError}</span>
        )}
      </div>
      <div className='checklist__input'>
        <label>
          Email
          <br />
          <ValidInput
            onBlur={blurHandler}
            onChange={emailHandler}
            value={email || ''}
            type='email'
            placeholder='Enter Your Email'
            name='email'
            className='js-input js-input-email'
          />
        </label>
        {emailDirty && emailError && (
          <span className='input-email'>{emailError}</span>
        )}
      </div>
      <div className='checklist__select'>
        <label>
          Life Event
          <br />
          <select name='marriage' id='marriage'>
            <option value='marriage'>Marriage</option>
          </select>
        </label>
      </div>
      <div className='checklist__input'>
        <label>
          Life Event Date
          <br />
          <ValidInput
            onBlur={blurHandler}
            onChange={dateHandler}
            value={date || ''}
            type='text'
            placeholder='DD/MM/YYYY'
            name='date'
            className='js-input js-input-date'
            pattern='[0-9]{2}[.][0-9]{2}[.][0-9]{4}$'
          />
        </label>
        {dateDirty && dateError && (
          <span className='input-date'>{dateError}</span>
        )}
      </div>
      <p>
        By submitting your details you agree with our
        <a href='#'>Privacy Policy</a>.
      </p>
      <button disabled={!formValid} className='btn' type='submit'>
        Download
      </button>
    </form>
  )
}

export default Form
