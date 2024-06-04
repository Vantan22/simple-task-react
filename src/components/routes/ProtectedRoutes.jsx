import { Outlet, useNavigate } from 'react-router-dom'
import {getLocalStorage} from '@/containts/LocalStorage/index.js';
const ProtectedRoutes = () => {
const navigate = useNavigate();
  const isAuthenticated = getLocalStorage('token')
console.log("isAuthenticated",isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />
  }
  return navigate('/auth/login')
}
export default ProtectedRoutes
