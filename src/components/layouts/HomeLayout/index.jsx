import styles from './index.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from '@/containts/LocalStorage'
import { useEffect } from 'react'
import MenuCollapse from '@common/SideBar/index.jsx'
import SideBar from '@common/SideBar';

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
        <SideBar />
      </div>
      <div className={styles.children}>
        <div className={styles.header}></div>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
