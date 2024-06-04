import { Link, useLocation } from 'react-router-dom'
import logo from '@assets/images/icon/logo.svg'
import styles from './index.module.scss'
import Button from '@common/Button/index.jsx'

const AuthHeader = () => {
  const location = useLocation().pathname.split('/')[2]
  const webName = 'Simple Task'
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt={webName} />
        <span>{webName}</span>
      </Link>
      <div className={styles.button}>
        <Button to="/auth/login" active={location === 'login'}>
          log in
        </Button>
        <Button to="/auth/signup" active={location === 'signup'}>
          sign up
        </Button>
      </div>
    </header>
  )
}

export default AuthHeader
