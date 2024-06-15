import { Link } from 'react-router-dom'
import styles from './button.module.scss'

const Button = ({ children, active, to, width, clicked, ...props }) => {
  const styledButtonActive = active ? `${styles.button} ${styles.active}` : styles.button
  if (to) {
    return (
      <Link onClick={clicked} to={to} className={styledButtonActive} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={clicked} style={{ width: width }} className={styledButtonActive} {...props}>
      {children}
    </button>
  )
}

export default Button
