import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
  return <input type='submit' value={text} className={styles.btn}/>
}

export default SubmitButton
