import LoginPage from '@/pages/LoginPage/index.jsx'
import HomeLayout from '@layouts/HomeLayout/index.jsx'
import ConfirmationPage from '@pages/ConfirmationPage/index.jsx'
import DashBoardPage from '@pages/DashBoardPage/index.jsx'
import NewPasswordPage from '@pages/NewPasswordPage/index.jsx'
import ProjectPage from '@pages/ProjectPage/index.jsx'
import RecoveryPage from '@pages/RecoveryPage/index.jsx'
import SignUpPage from '@pages/SignUpPage/index.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/new-password" element={<NewPasswordPage />} />
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<DashBoardPage />} />
        <Route path="/project" element={<ProjectPage />} />
        {/*<Route exact path="/" element={<LoginPage />} />*/}
      </Route>
      {/*<Route path="*" element={<HomeLayout />} />*/}
    </Routes>
  )
}

export default App
