import React from 'react'
import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select id='name' name='name'>
          <option>{options}</option>
        </select>
    </div>
  )
}

export default Select
