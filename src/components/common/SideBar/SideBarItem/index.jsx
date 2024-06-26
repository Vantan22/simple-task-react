import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import Icons from '@common/Icon'
import { useMenuContext } from '@context/MenuProvider/index.jsx'
import styles from './sideBarItem.module.scss'

const SideBarItem = ({ content, to, isDefault, icon }) => {
  const Icon = Icons[icon]
  const { setTitle } = useMenuContext()
  if (isDefault) {
    const iconColor = '#778CA2'
    return (
      <div className={clsx(styles.sideBarItem)}>
        <div className={styles.item}>
          <Icon fill={iconColor} />
          <span>{content}</span>
        </div>
      </div>
    )
  }
  let getLocation = useLocation().pathname.split('/')[1].toUpperCase()
  if (getLocation === '') {
    getLocation = 'DASHBOARD'
  }
  const isActive = getLocation === content.toUpperCase()
  const iconColor = isActive ? '#4D7CFE' : '#778CA2'

  return (
    <div
      className={clsx(styles.sideBarItem, isActive && styles.active)}
      onClick={() => {
        setTitle(content)
      }}
    >
      <Link to={to} className={styles.item}>
        <Icon fill={iconColor} />
        <span>{content}</span>
      </Link>
      {isActive && <div className={styles.horizontalLine} />}
    </div>
  )
}

export default SideBarItem
