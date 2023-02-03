import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" />
    <div className={styles.profile}>
      <Avatar hasBorder={true} src="https://github.com/deboraholiv.png"/>
      <strong>Deborah Oliveira</strong>
      <span>Web Developer</span>
    </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}