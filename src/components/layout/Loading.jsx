import React from 'react'
import styles from './Loading.module.css'
import loading from '../../img/loading.svg'

function Loadin() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt='loading'/>
      
    </div>
  )
}

export default Loadin
