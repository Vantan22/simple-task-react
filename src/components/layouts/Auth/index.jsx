import AuthHeader from '@layouts/Header/Auth/index.jsx'
import styles from './auth.module.scss'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <AuthHeader />
      <Outlet />
    </div>
  )
}

export default AuthLayout
