import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from '@/containts/LocalStorage'
import SideBar from '@common/SideBar'
import Header from '@layouts/Header/index.jsx'
import { useMenuContext } from '@context/MenuProvider/index.jsx'
import clsx from 'clsx'
import styles from './index.module.scss'

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
      <div className={clsx(styles.sideBar, { [styles.sidebarOpen]: !isMenuCollapse, [styles.sidebarOpen]: isMenuCollapse })}>
          <SideBar />
      </div>
      <div className={clsx(styles.content,isMenuCollapse && styles.contentIsCollapsed)}>
        <Header />
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
