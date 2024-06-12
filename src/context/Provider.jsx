import { MenuProvider } from '@context/MenuProvider/index.jsx'
import { UserProvider } from '@context/user-context.jsx'

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>{children}</MenuProvider>
    </UserProvider>
  )
}

export default Provider
