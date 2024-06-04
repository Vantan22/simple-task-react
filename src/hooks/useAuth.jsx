import HTTP from '@/axios/axios-config.js'
import { useUserContext } from '@context/user-context.jsx'
import {
  removeLocalStorage,
  setLocalStorage,
} from '@/containts/LocalStorage/index.js';

const UseAuth = () => {
  const { dispatch } = useUserContext()
  const login = async ({ email, password }) => {
  console.log({email, password});
    try {
      const response = await HTTP.post('/auth/login', {
        email,
        password,
      })
      const userInfo = response
      setLocalStorage('token', userInfo.token)// Giả sử API trả về thông tin user trong response.data
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
    dispatch({ type: 'LOGOUT', payload: null })
  }
const signup =async ({fullName, email, password}) => {
  try{
    const response = await HTTP.post('/auth/signup', {
      fullName,
      email,
      password,
    })
    const confirmationCode = response.confirmationCode
    setLocalStorage('confirmationCode', confirmationCode)
    return confirmationCode
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }

}
const confirmationCode = async (confirmationCode) => {
  try {
     await HTTP.post('/auth/confirmation', {
      confirmationCode,
    })

    removeLocalStorage('confirmationCode')
    return true
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
  return {
    login,
    logout,
    signup,
    confirmationCode,
  }
}
export default UseAuth
