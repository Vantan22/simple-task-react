import LoginPage from '@pages/LoginPage/index.jsx'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '@components/routes/ProtectedRoutes.jsx'
import AuthLayout from '@layouts/Auth/index.jsx';
import ErrorPage from '@pages/ErrorPage/404.jsx';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
