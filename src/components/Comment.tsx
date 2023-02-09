
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentsProps {
  comment: string
  onDeleteComment: (comment: string) => void 
}


export function Comment(props: CommentsProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    props.onDeleteComment(props.comment)
  }

  function handleLikeComment() {
    setLikeCount((state)=> {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/deboraholiv.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time title="02 de fevereiro às 18:15" dateTime="2023-02-02 18:15:12">Cerca de 1h</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{props.comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    
    </div>
  )
}