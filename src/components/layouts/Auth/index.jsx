import AuthHeader from '@layouts/Header/Auth/index.jsx';
import styles from './auth.module.scss'
const AuthLayout = ({children}) => {
  return (
    <div className={styles.authLayout}>
     <AuthHeader/>
      {children}
    </div>
  )
}

export default AuthLayout
