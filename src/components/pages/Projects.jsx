import React from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Projects.module.css'
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';

function Projects() {

  const [projects, setProjects]= useState([]);
  const [loading, setLoading]= useState(true);
  const [projectMessage, setProjectMessage]= useState(''); 

  const location = useLocation();
  let message = '';

  if(location.state)
  {
    console.log(message)
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {  //add timeout de teste só para simular o loading

      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          'content-type': 'applicaton/json'
        }
      })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .then(() => setLoading(false))
      .catch(err => console.log(`Erro na request ${err}`))

    }, 3000)
  }, []);

  function removeProject(id)
  {
    fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'applicaton/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))  
        setProjectMessage('Projeto removido com sucesso')
      })
      .catch(err => console.log(`Erro na request ${err}`))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to={'/newproject'} text={'Criar Projeto'}/>
      </div>

      {message && <Message type='success' msg={message} />}

      {projectMessage && <Message type='success' msg={projectMessage} />}

      <Container customClass='start'>
        
        {
          //verifica se tem projetos
          projects.length > 0 && (
            projects.map((project) => (
              <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category}
                handleRemove={removeProject}
              />
            )) 
          )
        }

        {
          loading && <Loading />
        }


        {
          !loading && projects.length === 0 && (
            <p>Não há projetos cadastrados</p>
          )
        }

        
      </Container>
    </div>
  )
}

export default Projects
