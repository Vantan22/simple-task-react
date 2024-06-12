import Icons from '@common/Icon'
import useHover from '@hooks/useHover.jsx'
import clsx from 'clsx'
import styles from './sideBarItemDefault.module.scss'

const SideBarItemDefault = ({ content, icon, clickHandler }) => {
  const Icon = Icons[icon]
  const [hoverRef, isHovered] = useHover()

  const handleClick = () => {
    clickHandler()
  }

  const iconColor = isHovered ? '#4D7CFE' : '#778CA2'
  return (
    <div ref={hoverRef} className={clsx(styles.sideBarItemClassic)} onClick={handleClick}>
      <div className={styles.item}>
        <Icon fill={iconColor} />
        <span>{content}</span>
      </div>
    </div>
  )
}

export default SideBarItemDefault
