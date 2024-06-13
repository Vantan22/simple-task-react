import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import Icons from '@common/Icon'
import { useMenuContext } from '@context/MenuProvider/index.jsx'
import styles from './sideBarIcon.module.scss'

const SideBarIcon = ({ content, to, icon }) => {
  const Icon = Icons[icon]
  const { setTitle } = useMenuContext()
  let getLocation = useLocation().pathname.split('/')[1].toUpperCase()
  if (getLocation === '') {
    getLocation = 'DASHBOARD'
  }
  const isActive = getLocation === content.toUpperCase()
  const iconColor = isActive ? '#4D7CFE' : '#778CA2'

  return (
    <div
      className={clsx(styles.sideBarIcon, isActive && styles.active)}
      onClick={() => {
        setTitle(content)
      }}
    >
      <Link to={to} className={styles.item}>
        <Icon fill={iconColor} />
      </Link>
      {isActive && <div className={styles.horizontalLine} />}
    </div>
  )
}
export default SideBarIcon
