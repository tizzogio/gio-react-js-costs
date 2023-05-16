import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BiEdit, BiTrash } from "react-icons/bi";

function ProjectCard({id, name, budget, category, handleRemove}) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category?.name.toLowerCase()]}`}></span> {category?.name.toUpperCase()}
      </p>
     <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
        <BiEdit /> Editar
        </Link>
        <button onClick={remove}>
          <BiTrash    />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
