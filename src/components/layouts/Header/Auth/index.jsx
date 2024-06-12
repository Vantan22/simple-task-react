import { Link, useLocation } from 'react-router-dom'
import Button from '@common/Button/index.jsx'
import logo from '@icons/ic_logo.svg'
import styles from './index.module.scss'

const AuthHeader = () => {
  const location = useLocation().pathname.split('/')[1]
  const active = location === 'login'
  const webName = 'Simple Task'
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt={webName} />
        <span>{webName}</span>
      </Link>
      <div className={styles.button}>
        <Button to="/login" active={active}>
          log in
        </Button>
        <Button to="/signup" active={!active}>
          sign up
        </Button>
      </div>
    </header>
  )
}

export default AuthHeader
