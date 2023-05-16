import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

  const history = useNavigate();

  function createProject(project){
    
    // // Iniciando projetos e serviços
    project.cost = 0;
    project.servicos = []

    console.log(JSON.stringify(project));

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(project),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(`PROJETO CRIADO ${JSON.stringify(data)}`);
      //history('/projects', {message : "Projeto criado com sucesso!"});
      history('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    })
    .catch(err => console.log(`Erro na request ${err}`))

  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois add serviços</p>

      <ProjectForm 
        btnText='Salvar Projeto'
        handleSubmit={createProject}/>
    </div>
  )
}

export default NewProject
