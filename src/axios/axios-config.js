import axios from 'axios'
import { getLocalStorage, removeLocalStorage } from '@/contains/LocalStorage/index.js'

// Tạo một phiên axios
const HTTP = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Access-Control-Allow-Origin': '*' },
})

// Tạo một interceptor để xử lý này của token
const token = getLocalStorage('token')
if (token) {
  HTTP.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Tạo một interceptor để xử lý mã lỗi HTTP
HTTP.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi thành công
    return {
      response: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  },
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      const { status } = error.response

      if (status === 401) {
        removeLocalStorage('token')
        removeLocalStorage('email')
        removeLocalStorage('userId')
        window.location.href = '/login'
      } else if (status === 403) {
        // Xử lý mã lỗi 403 (Forbidden)
        // Ví dụ: Hiển thị thông báo "Tài khoản không có quyền truy cập"
      } else if (status === 404) {
        // Xử lý mã lỗi 404 (Not Found)
        // Ví dụ: Hiển thị thông báo "Trang không tồn tại"
      } else {
        // Xử lý các mã lỗi khác
        // Ví dụ: Hiển thị thông báo lỗi chung
      }
    }

    return Promise.reject(error)
  },
)

export default HTTP
