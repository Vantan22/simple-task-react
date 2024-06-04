import {UserProvider} from '@context/user-context.jsx';

const Provider = ({ children }) => {
return (
  <UserProvider>
    {children}
  </UserProvider>
);
};

export default Provider;
