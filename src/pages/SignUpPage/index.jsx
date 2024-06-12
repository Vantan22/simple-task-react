import { registerSchema } from '@/validator/validationSchemas.js'
import AuthForm from '@common/AuthForm/index.jsx'
import Button from '@common/Button/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuth from '@hooks/useAuth.jsx'
import AuthLayout from '@layouts/Auth/index.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './signUpPage.module.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const { registerUser } = useAuth()
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const userInfo = await registerUser(data)
      navigate('/confirmation')
      console.log('User Registered:', userInfo)
    } catch (error) {
      console.error('Register error:', error)
    }
  }
  return (
    <AuthLayout>
      <AuthForm title="Create an account">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic
              width="364px"
              id="fullName"
              name="fullName"
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              {...register('fullName')}
            />
            <InputBasic
              width="364px"
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
            <InputBasic
              width="364px"
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
          </div>
          <Button type="submit" active width="100%">
            sign up
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default SignUp
