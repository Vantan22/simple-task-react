import { memo } from 'react'
import { Avatar, Popover } from 'antd'
import useAuth from '@hooks/useAuth.jsx'
import Button from '@common/Button/index.jsx'
import Icons from '@common/Icon'
import SideBarItemDefault from '@common/SideBar/SideBarItemDefault/index.jsx'
import { useMenuContext } from '@context/MenuProvider/index.jsx'
import styles from './header.module.scss'

const Header = () => {
  const { title, setIsMenuCollapse, isMenuCollapse } = useMenuContext()
  const content = (
    <div>
      <SideBarItemDefault content="Add new project" icon="project" />
      <SideBarItemDefault content="Add new task" icon="tasks" />
      <SideBarItemDefault content="Add new contact" icon="contacts" />
      <SideBarItemDefault content="create new event" icon="calendar" />
    </div>
  )
  const { logout } = useAuth()
  const handleClick = () => {
    setIsMenuCollapse(!isMenuCollapse)
  }
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <div className={styles.headerBtn} onClick={handleClick}>
          <Icons.headerBtn height="24px" width="20px" style={{ cursor: 'pointer' }} />
        </div>
        <h1>{title}</h1>
      </div>
      <div className={styles.headerControls}>
        <div className={styles.search}>
          <label htmlFor="search">
            <Icons.search height="24px" width="20px" style={{ cursor: 'pointer' }} />
          </label>
          <input id="search" type="text" placeholder="Search for task and etc." />
        </div>
        <div className={styles.headerButtons}>
          <Popover content={content}>
            <Icons.notification style={{ cursor: 'pointer' }} />
          </Popover>
          <Popover content={content}>
            <Icons.add style={{ cursor: 'pointer' }} />
          </Popover>
          <Popover content={content}>
            <Icons.app style={{ cursor: 'pointer' }} />
          </Popover>
        </div>
        <div style={{ cursor: 'pointer' }}>
          <Popover
            content={
              <Button
                clicked={() => {
                  logout()
                }}
              >
                Logout
              </Button>
            }
            cursor="pointer"
          >
            <Avatar size={36}>{'user'}</Avatar>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
