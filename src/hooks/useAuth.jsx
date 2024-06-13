import HTTP from '@/axios/axios-config.js'
import { useUserContext } from '@context/user-context.jsx'
import { removeLocalStorage, setLocalStorage } from '@/contains/LocalStorage/index.js'

const UseAuth = () => {
  const { dispatch } = useUserContext()
  const login = async ({ email, password }) => {
    console.log({
      email,
      password,
    })
    try {
      const { response } = await HTTP.post('/auth/login', {
        email,
        password,
      })
      const userInfo = response
      console.log(userInfo)
      setLocalStorage('token', userInfo.token) // Giả sử API trả về thông tin user trong response.data
      dispatch({
        type: 'LOGIN',
        payload: userInfo,
      })
      return userInfo
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
  }
  const registerUser = async ({ fullName, email, password }) => {
    try {
      const { response } = await HTTP.post('/auth/signup', {
        fullName,
        email,
        password,
      })
      const confirmationCode = response.confirmationCode
      setLocalStorage('email', email)
      setLocalStorage('confirmationCode', confirmationCode)
      return confirmationCode
    } catch (error) {
      console.error('register failed:', error)
      throw error
    }
  }
  const confirmationCode = async ({ email, confirmationCode }) => {
    try {
      await HTTP.post('/auth/confirmation', {
        email: email,
        confirmationCode,
      })
      removeLocalStorage('confirmationCode')
      removeLocalStorage('email')
      return true
    } catch (error) {
      console.error('confirmation failed:', error)
      throw error
    }
  }
  const recoverPassword = async (email) => {
    try {
      const { response } = await HTTP.post('/auth/reset-password', {
        email: email,
      })
      console.log(response)
      return response
    } catch (error) {
      console.error('recover failed:', error)
      throw error
    }
  }
  const checkResetCode = async (email, resetCode) => {
    try {
      const { status } = await HTTP.post('/auth/check-reset-code', {
        email: email,
        resetCode: resetCode,
      })
      return status
    } catch (error) {
      console.error('check failed:', error)
      throw error
    }
  }
  const newPassword = async (email, resetCode, password) => {
    try {
      const { status } = await HTTP.post('/auth/new-password', {
        email: email,
        resetCode: resetCode,
        password: password,
      })
      return status
    } catch (error) {
      console.error('check failed:', error)
      throw error
    }
  }

  return {
    login,
    logout,
    registerUser,
    checkResetCode,
    recoverPassword,
    newPassword,
    confirmationCode,
  }
}
export default UseAuth
