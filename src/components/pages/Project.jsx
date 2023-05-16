import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../Project/ProjectForm'
import Message from '../layout/Message'
//import ServiceForm from '../service/ServiceForm'
//import ServiceCard from '../service/ServiceCard'
import { parse, v4 as uuidv4 } from 'uuid'

function Project() {

  const { id } = useParams()
  const [project, setProject] = useState([])

  useEffect(() => {
    setTimeout(() => {  //add timeout de teste só para simular o loading

      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          'content-type': 'applicaton/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setProject(data)
        //setServices(data.services)
      })
      .catch(err => console.log(`Erro na request ${err}`))

    }, 0)
  }, []);
  

  return (
<>
      {project.name ? (
        <div className={styles.project_details}>

        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
