import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois add serviços</p>

      <ProjectForm btnText='Salvar Projeto'/>
    </div>
  )
}

export default NewProject
