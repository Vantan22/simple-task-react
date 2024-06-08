import styles from './index.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from '@/containts/LocalStorage'
import { useEffect } from 'react'
import SideBar from '@common/SideBar'
import Header from '@layouts/Header/index.jsx'
import { useMenuContext } from '@context/MenuProvider/index.jsx'
import clsx from 'clsx'

const HomeLayout = () => {
  const navigate = useNavigate()
  const isAuthenticated = getLocalStorage('token')
  const { isMenuCollapse } = useMenuContext()
  useEffect(() => {
    if (!isAuthenticated) {
      removeLocalStorage('token')
      removeLocalStorage('email')
      removeLocalStorage('userId')
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className={clsx(styles.sideBar, isMenuCollapse && styles.active)}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.children}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
