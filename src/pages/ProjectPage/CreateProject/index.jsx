import { useState } from 'react'
import { Drawer, Upload } from 'antd'
import useProject from '@hooks/useProject.jsx'
import Button from '@common/Button/index.jsx'
import DatePickerLocal from '@common/DatePickerLocal/index.jsx'
import Icons from '@common/Icon/index.jsx'
import InputCategory from '@common/Input/InputCategory/index.jsx'
import InviteMembers from '@common/InviteMembers/index.jsx'
import styles from './createProject.module.scss'

const CreateProject = ({ isOpen, close }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [budget, setBudget] = useState(0)
  const [dueDate, setDueDate] = useState('')
  const [image, setImage] = useState(null)
  const [members, setMembers] = useState([])
  const [imageUrl, setImageUrl] = useState()

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const { Dragger } = Upload
  const { createProject } = useProject()
  const props = {
    name: 'file',
    onChange(info) {
      const { status } = info.file
      setImage(info.file.originFileObj)
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        console.log('done')
      } else if (status === 'error') {
        console.log('error')
      }
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url)
      })
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
    accept: 'image/*',
  }

  const handleDatePicker = (e) => {
    setDueDate(e)
  }

  const handleCategory = (e) => {
    console.log(e, 'handleCategory')
    setCategory(e)
  }
  const handleName = (e) => {
    setName(e)
  }
  const handleBudget = (e) => {
    setBudget(e)
  }
  const handleMembers = (e) => {
    setMembers(e)
  }

  const handleCreateProject = async () => {
    await createProject({
      name,
      category,
      budget,
      dueDate,
      image,
      members,
    })
    console.log({
      name,
      category,
      budget,
      dueDate,
      image,
      members,
    })
  }
  return (
    <Drawer
      title="Add new project"
      footer={
        <div className={styles.footerDrawer}>
          <Button clicked={close}>Cancel</Button>
          <Button clicked={handleCreateProject} type="submit" active={true}>
            Create Project
          </Button>
        </div>
      }
      onClose={close}
      open={isOpen}
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
          <div className={styles.inputBasic}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <InputCategory name="category" label="Category" width="100%" value={handleCategory} />
          <div className={styles.flex}>
            <DatePickerLocal sendData={handleDatePicker} />
            <div className={styles.Label}>
              <label htmlFor="budget">Budget</label>
              <div className={styles.inputWithIcon}>
                <input
                  id="budget"
                  className={styles.number}
                  name="budget"
                  type="number"
                  value={budget}
                  onChange={(e) => handleBudget(e.target.value)}
                />
                <div className={styles.icon}>
                  <Icons.project />
                </div>
              </div>
            </div>
          </div>
          <InviteMembers values={handleMembers} />
        </div>
      </div>
    </Drawer>
  )
}
export default CreateProject
