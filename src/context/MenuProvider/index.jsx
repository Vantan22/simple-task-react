import { createContext, useContext, useState } from 'react'

// Tạo context
export const MenuContext = createContext()

// Tạo provider
export const MenuProvider = ({ children }) => {
  const [title, setTitle] = useState('Dashboard')
  const [isMenuCollapse, setIsMenuCollapse] = useState(false)
  const [isMenuItem, setIsMenuItem] = useState('Dashboard')
  const value = {
    title,
    setTitle,
    isMenuCollapse,
    setIsMenuCollapse,
    isMenuItem,
    setIsMenuItem,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

// Custom hook để sử dụng context
export const useMenuContext = () => {
  return useContext(MenuContext)
}
