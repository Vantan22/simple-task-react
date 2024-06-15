import { useState } from 'react'
import { Radio } from 'antd'
import CreateProject from '@pages/ProjectPage/CreateProject/index.jsx'
import Empty from '@common/Empty/Project/index.jsx'
import Filter from '@common/Filter/index.jsx'
import TextWithIcon from '@common/Filter/TextWithIcon/index.jsx'
import Icons from '@common/Icon/index.jsx'
import { getLocalStorage } from '@/contains/LocalStorage/index.js'
import { sortItems, StatusItems } from '@/contains/Project/_project_filter_items.js'
import styles from './project.module.scss'

const ProjectPage = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const isEmpty = true
  const handleClick = (e) => {
    console.log(e)
  }
  const [typeShow, setTypeShow] = useState('grid')
  const onChange = (e) => {
    setTypeShow(e.target.value)
  }

  return (
    <>
      <div className={styles.project}>
        <div className={styles.header}>
          <div className={styles.filter}>
            <Filter items={sortItems} title="Sort" clicked={handleClick} />
            <Filter items={StatusItems} title="Status" clicked={handleClick} />
          </div>
          <div className={styles.actions}>
            <div className={styles.views}>
              <Radio.Group
                value={typeShow}
                onChange={onChange}
                style={{
                  marginBottom: 16,
                }}
              >
                <Radio.Button value="grid">
                  <Icons.grid fill={typeShow === 'grid' ? '#4D7CFE' : '#778CA2'} />
                </Radio.Button>
                <Radio.Button value="list">
                  <Icons.list fill={typeShow === 'list' ? '#4D7CFE' : '#778CA2'} />
                </Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <TextWithIcon icon="addClear" text="Create Project" Clicked={showDrawer} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {isEmpty ? (
            <div>
              <Empty />
            </div>
          ) : (
            <div>
              <div className={styles.body}>
                <div className={styles.footer}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <CreateProject isOpen={open} close={onClose} />
    </>
  )
}

export default ProjectPage
