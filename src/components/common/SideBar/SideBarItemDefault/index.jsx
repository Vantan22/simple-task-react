import styles from './sideBarItemDefault.module.scss'
import Icons from '@common/Icon'
import clsx from 'clsx'
import useHover from '@hooks/useHover.jsx'

const SideBarItemDefault = ({ content, icon, clickHandler }) => {
  const Icon = Icons[icon]
  const[hoverRef, isHovered] = useHover()

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
