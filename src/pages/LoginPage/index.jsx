import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '@layouts/Auth/index.jsx'
import styles from '@pages/LoginPage/loginPage.module.scss'
import useAuth from '@hooks/useAuth.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import Button from '@common/Button/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import { RecoverySchema } from '@/validator/validationSchemas.js'

const LoginPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RecoverySchema),
  })
  const { login } = useAuth()
  const onSubmit = async (data) => {
    try {
      const userInfo = await login(data)
      console.log('User Logged In:', userInfo)
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
    }
  }
  return (
    <AuthLayout>
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
    </AuthLayout>
  )
}

export default LoginPage
