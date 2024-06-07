import styles from './sideBarItem.module.scss'
import Icons from '@common/Icon'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const SideBarItem = ({ content, to, icon }) => {
  let getLocation = useLocation().pathname.split('/')[1].toUpperCase()

  if (getLocation === '') {
    getLocation = 'DASHBOARD'
  }

  const isActive = getLocation === content.toUpperCase()
  const Icon = Icons[icon]
  const iconColor = isActive ? '#4D7CFE' : '#778CA2'

  return (
    <div className={clsx(styles.sideBarItem, isActive && styles.active)}>
      <Link to={to} className={styles.item}>
        <Icon fill={iconColor} />

        <span>{content}</span>
      </Link>
      {isActive && <div className={styles.horizontalLine} />}
    </div>
  )
}

export default SideBarItem
