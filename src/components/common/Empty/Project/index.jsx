import emptyImg from '@icons/Projects/empty.svg'
import styles from './empty.module.scss'

const Empty = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>
        <img src={emptyImg} alt="Empty project" />
      </div>
      <div className={styles.title}>
        <h3>Active projects not found</h3>
        <p>Try to create a new project or sign in to another workspace</p>
      </div>
    </div>
  )
}

export default Empty
