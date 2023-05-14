import  { React, useState, useEffect } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../forms/Input'
import Select from '../forms/Select'
import SubmitButton from '../forms/SubmitButton'

function ProjectForm({btnText, handleSubmit, projectData}) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-type': 'applicaton/json'
      }
    })
    .then((res) => res.json())
    .then((data) => setCategories(data))
    .catch(err => console.log(`Erro na request ${err}`))
  }, []);

  const submit = (e) => {
    e.preventDefault();
    //console.log(`VALIDANDO MEU OBJETO`);
    //console.log(project);
    handleSubmit(project);
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleSelect(e) {
    setProject({
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    },
    })
  }

  return (
    <div>
        <form className={styles.form} onSubmit={submit}>
          <Input 
            type='text' 
            text='Nome do projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
            value={project.name ? project.name : ''}
            handleOnChange={handleChange} 
          />

          <Input 
            type='number' 
            text='Budget do projeto' 
            name='budget'
            placeholder='Insira o budget disponível'
            value={project.budget ? project.budget : ''}
            handleOnChange={handleChange} 
          />

            <Select
            text='Categoria do projeto' 
            name='category_id' 
            options={categories}
            value={project.category ? project.category.id : ''}
            handleOnChange={handleSelect}/>
            
            <SubmitButton
              text={btnText}/>
        </form>
    </div>
  )
}

export default ProjectForm
