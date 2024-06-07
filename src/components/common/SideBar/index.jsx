import styles from './sideBar.module.scss'
import SideBarItem from '@common/SideBar/SideBarItem/index.jsx'
import Icon from '@common/Icon'
import { Link } from 'react-router-dom'
import { Collapse } from 'antd'
import { menuItemNoContents, menuItems } from '@common/SideBar/containts/menuItem'
import { useEffect, useState } from 'react'
import { useMenuContext } from '@context/MenuProvider'

const SideBar = () => {
  const { Panel } = Collapse
  const [items, setItems] = useState(menuItems)
  const { isMenuCollapse, title } = useMenuContext()

  useEffect(() => {
    if (isMenuCollapse) {
      setItems(menuItemNoContents)
    } else {
      setItems(menuItems)
    }
  }, [isMenuCollapse])

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarLogo}>
        <Link to="/" className={styles.logoWrapper}>
          <Icon.logo height="32" width="32" />
          <h1 className={styles.title}>Simple task</h1>
        </Link>
      </div>
      <div className={styles.sideBarCollapse}>
        <Collapse ghost defaultActiveKey={['MANAGEMENT', 'EMPLOYEES', 'COMMUNICATION']} expandIconPosition="end">
          {items.map((item) => (
            <Panel header={item.header} key={item.key}>
              {item.children.map((child) => (
                <SideBarItem key={child.key} content={child.content} to={child.to} icon={child.icon} />
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
      <div className={styles.sideBarGroup}>
        <div className={styles.title}>
          <h3>Latest Projects</h3>
          <Icon.add width="14px" height="17px" cursor="pointer" />
        </div>
        <div>
          <SideBarItem content="Project 1" to="/project/1" icon="project" />
          <SideBarItem content="Project 1" to="/project/1" icon="project" />
          <SideBarItem content="Project 1" to="/project/1" icon="project" />
        </div>
        <div className={styles.more}>
          <Icon.more width="14px" height="17px" cursor="pointer" />
          <h3>More Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default SideBar
