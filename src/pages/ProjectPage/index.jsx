import { useState } from 'react'
import { Drawer, Radio, Upload } from 'antd'
import Button from '@common/Button/index.jsx'
import DatePickerLocal from '@common/DatePickerLocal/index.jsx'
import Empty from '@common/Empty/Project/index.jsx'
import Filter from '@common/Filter/index.jsx'
import TextWithIcon from '@common/Filter/TextWithIcon/index.jsx'
import Icons from '@common/Icon/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import InputCategory from '@common/Input/InputCategory/index.jsx'
import InputWithIcon from '@common/Input/InputWithIcon/index.jsx'
import InviteMembers from '@common/InviteMembers/index.jsx'
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

  const handleCreateProject = () => {
    showDrawer()
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const [imageUrl, setImageUrl] = useState()
  const { Dragger } = Upload
  const props = {
    name: 'file',
    onChange(info) {
      const { status } = info.file
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url)
      })
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
    accept: 'image/*',
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
              <TextWithIcon icon="addClear" text="Create Project" Clicked={handleCreateProject} />
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
      <Drawer
        title="Add new project"
        footer={
          <div className={styles.footerDrawer}>
            <Button>Cancel</Button>
            <Button active={true}>Create Project</Button>
          </div>
        }
        onClose={onClose}
        open={open}
        width={517}
      >
        <div className={styles.drawer}>
          <Dragger {...props} showUploadList={false}>
            {imageUrl ? (
              <img src={imageUrl} alt="" className={styles.image} />
            ) : (
              <div className={styles.upload}>
                <Icons.arrowTop /> <p>Upload photo</p>
              </div>
            )}
          </Dragger>
          <div className={styles.form}>
            <InputBasic name="name" label="Project name" width="100%" />
            <InputCategory name="category" label="Category" width="100%" />
            <div className={styles.flex}>
              <DatePickerLocal />
              <InputWithIcon
                icon="project"
                name="Budget"
                label="Budget"
                width="100%"
                type="number"
                inputMode="numeric"
              />
            </div>
            <InviteMembers />
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default ProjectPage
