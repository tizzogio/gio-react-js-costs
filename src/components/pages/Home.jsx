import React from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo</h1>
      <a href='/'>Criar projeto</a>
      <img src={savings} alt='Cost'/>
    </section>
  )
}

export default Home
