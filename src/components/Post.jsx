import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post(props) {
  const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState([
    'Muito bom, parabéns!! 👏👏'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  function handleAddNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  } 
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete){
    const commentWithoutDeletedOne = comments.filter(comment=>{
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={props.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} datatime={props.publishedAt.toISOString()}> Publicado {publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {props.content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          } else if (line.type === 'tag') {
            return (<span key={line.content}><a href="#">{line.content}{' '}</a></span>)
          }
        })}
      </div>
      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea onChange={handleNewCommentChange} value={newCommentText} name="comment" placeholder='Deixe um comentario' required onInvalid={handleNewCommentInvalid}/>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} comment={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}