import { memo, useState } from 'react'
import { Popover } from 'antd'
import Icons from '@common/Icon/index.jsx'
import SideBarText from '@common/SideBar/SideBarText/index.jsx'
import styles from './filter.module.scss'

const Filter = ({ title, items, clicked }) => {
  const defaultContent = items[0]?.content
  const [contentActive, setContentActive] = useState(items[0]?.content)
  const handleClick = (content) => {
    clicked(content)
    setContentActive(content)
  }
  const contents = items.map((item) => (
    <SideBarText key={item.id} text={item.content} clicked={() => handleClick(item.content)} />
  ))
  return (
    <div className={styles.filter}>
      <div className={styles.title}>{title}</div>
      <Popover content={contents} placement="bottom">
        <div className={styles.content}>
          <span>{contentActive}</span>
          <Icons.dropArrow />
        </div>
      </Popover>
    </div>
  )
}

export default memo(Filter)
