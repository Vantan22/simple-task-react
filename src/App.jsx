import LoginPage from '@/pages/LoginPage/index.jsx'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '@components/routes/ProtectedRoutes.jsx'
import ErrorPage from '@/pages/ErrorPage/404.jsx'
import SignUpPage from '@pages/SignUpPage/index.jsx';
import ConfirmationPage from '@pages/ConfirmationPage/index.jsx';
import NewPasswordPage from '@pages/NewPasswordPage/index.jsx';
import RecoveryPage from '@pages/RecoveryPage/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/new-password" element={<NewPasswordPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route exact path="/" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
