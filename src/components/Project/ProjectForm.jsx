import React from 'react'
import styles from './ProjectForm.module.css'
import Input from '../forms/Input'
import Select from '../forms/Select'
import SubmitButton from '../forms/SubmitButton'

function ProjectForm({btnText}) {
  return (
    <div>
        <form className={styles.form}>
          <Input 
            type='text' 
            text='Nome do projeto' 
            name={'Nome do projeto'}
            placeholder={'Insira o nome do projeto'} />

          <Input 
            type='number' 
            text='Budget' 
            name={'Budget'} 
            placeholder={'Insira o budget disponível'}/>

            <Select
            text='category_id' 
            name={'Categoria do projeto'} 
            options='opções TBD'/>

            <SubmitButton
              text={btnText}/>
        </form>
    </div>
  )
}

export default ProjectForm
