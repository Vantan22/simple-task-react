import { UserProvider } from '@context/user-context.jsx'
import { MenuProvider } from '@context/MenuProvider/index.jsx'

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>{children}</MenuProvider>
    </UserProvider>
  )
}

export default Provider
