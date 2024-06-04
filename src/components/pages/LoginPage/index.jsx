import AuthLayout from '@layouts/Auth/index.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import Button from '@common/Button/index.jsx'
import styles from './loginPage.module.scss'
import useAuth from '@hooks/useAuth.jsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/validator/validationSchemas.js'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const { login } = useAuth()
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const userInfo = await login(data)
      console.log('User Logged In:', userInfo)
    } catch (error) {
      console.error('Login error:', error)
    }
  }
  return (
    // <AuthLayout>
      <AuthForm title="Login">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic width="364px" id="email" name="email" label="Email" type="email" {...register('email')} />
            <InputBasic
              width="364px"
              id="password"
              name="password"
              label="Password"
              type="password"
              {...register('password')}
            />
          </div>
          <Button type="submit" active width="100%">
            Login
          </Button>
        </form>
      </AuthForm>
    // </AuthLayout>
  )
}

export default LoginPage
