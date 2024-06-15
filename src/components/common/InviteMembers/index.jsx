import { memo, useRef, useState } from 'react'
import HTTP from '@/axios/axios-config.js'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Select, Space } from 'antd'
import Label from '@common/Label/index.jsx'

const InviteMembers = ({ values }) => {
  const [items, setItems] = useState([])
  const [email, setEmail] = useState('')
  const inputRef = useRef(null)
  const onNameChange = (event) => {
    setEmail(event.target.value)
  }
  const addItem = (e) => {
    e.preventDefault()
    HTTP.get('/user/find-by-email/' + email)
      .then((res) => {
        if (!items.some((existingItem) => existingItem.email === email)) {
          setItems([...items, res.response])
        }
      })
      .catch((e) => {
        console.log(e)
      })
    setEmail('')
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }
  return (
    <Label label="Invite members">
      <Select
        style={{
          width: 300,
        }}
        mode="multiple"
        onChange={(e) => values(e)}
        placeholder="custom dropdown render"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: '8px 0',
              }}
            />
            <Space
              style={{
                padding: '0 8px 4px',
              }}
            >
              <Input
                placeholder="Please enter item"
                ref={inputRef}
                value={email}
                onChange={onNameChange}
                onKeyDown={(e) => e.stopPropagation()}
              />
              <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                Add item
              </Button>
            </Space>
          </>
        )}
        options={items.map((item) => ({
          label: item.fullName,
          value: item._id,
        }))}
      />
    </Label>
  )
}
export default memo(InviteMembers)
