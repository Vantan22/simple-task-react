import React, { useState } from 'react'
import {Collapse, Menu} from 'antd';
import Icon from '@components/common/Icon'

const MenuCollapse = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
const [current, setCurrent] = useState('1');

const onClick = (e) => {
console.log('click ', e);
setCurrent(e.key);
};

const items = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <Icon name='dashboard' />,
    children: [
      {
        key: '1',
        icon: <Icon name='dashboard' />,
        label: 'Option 1',
      },
      {
        key: '2',
        icon: <Icon name='dashboard' />,
        label: 'Option 2',
      },
      {
        key: '3',
        icon: <Icon name='dashboard' />,
        label: 'Option 3',
      },
      {
        key: '4',
        icon: <Icon name='dashboard' />,
        label: 'Option 4',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <Icon name='dashboard' />,
    children: [
      {
        key: '5',
        icon: <Icon name='dashboard' />,
        label: 'Option 5',
      },
      {
        key: '6',
        icon: <Icon name='dashboard' />,
        label: 'Option 6',
      },
      {
        key: 'sub3',
        icon: <Icon name='dashboard' />,
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <Icon name='dashboard' />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
];
  return (
    <div
      style={
        {
          // width: 252,
        }
      }
    >
      <Menu
        onClick={onClick}
        style={{
          width: 76,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  )
}
export default MenuCollapse
