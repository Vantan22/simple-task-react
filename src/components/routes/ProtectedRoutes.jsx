import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '@/containts/LocalStorage/index.js';

const ProtectedRoutes = ({ children }) => {
const navigate = useNavigate();
const isAuthenticated = getLocalStorage('token');

useEffect(() => {
if (!isAuthenticated) {
navigate('/login');
}
}, [isAuthenticated, navigate]);

return <Outlet/>;
};

export default ProtectedRoutes;
