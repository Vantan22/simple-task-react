import styles from './index.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from '@/containts/LocalStorage/index.js'
import { useEffect } from 'react'
import MenuCollapse from '@common/MenuCollapse/index.jsx'

const HomeLayout = () => {
  const navigate = useNavigate()
  const isAuthenticated = getLocalStorage('token')

  useEffect(() => {
    if (!isAuthenticated) {
      removeLocalStorage('token')
      removeLocalStorage('email')
      removeLocalStorage('userId')
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className={styles.homeLayout}>
      <div className={styles.menu}>
        <MenuCollapse />
      </div>
      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
