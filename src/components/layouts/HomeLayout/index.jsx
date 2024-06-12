import styles from './index.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from '@/containts/LocalStorage'
import { useEffect } from 'react'
import SideBar from '@common/SideBar'
import Header from '@layouts/Header/index.jsx'
import { useMenuContext } from '@context/MenuProvider/index.jsx'

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
    <div className={styles.homeLayout}>
      <div className={styles.sideBar}>
        <div className={styles.sideBarWrapper}>
          <SideBar />
        </div>
      </div>
      <div className={styles.content}>
        <Header />
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
