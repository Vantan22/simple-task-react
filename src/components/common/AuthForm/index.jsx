import { useLocation } from 'react-router-dom'
import styles from './authForm.module.scss'
const AuthForm = ({ children, title }) => {
  const redirectLogin = () => {
    return (
      <div className={styles.navigation}>
        <p>Already have an account?</p>
        <a href="/auth/login">Login here</a>
      </div>
    )
  }
  const isLoginPage = useLocation().pathname.split('/')[1] === 'login'

  return (
    <div className={styles.authForm}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <div className={styles.footer}>
        {!isLoginPage ? (
          redirectLogin()
        ) : (
          <div className={styles.navigation}>
            <p>Don’t have an account?</p>
            <a href="/auth/signup">Sign up here</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthForm
