import { getLocalStorage } from '@/containts/LocalStorage/index.js'
import { NewPasswordSchema } from '@/validator/validationSchemas.js'
import AuthForm from '@common/AuthForm/index.jsx'
import Button from '@common/Button/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuth from '@hooks/useAuth.jsx'
import AuthLayout from '@layouts/Auth/index.jsx'
import styles from '@pages/NewPasswordPage/newPassword.module.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewPasswordSchema),
  })
  const email = getLocalStorage('email')?.replace(/"/g, '')
  const resetCode = getLocalStorage('resetCode')
  const { recoverPassword } = useAuth()

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <AuthLayout>
      <AuthForm title="New Password">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic
              width="364px"
              id="email"
              name="password"
              label="password"
              type="password"
              {...register('password')}
            />
            <InputBasic
              width="364px"
              id="confirmPassword"
              name="confirmPassword"
              label="confirmPassword"
              type="password"
              {...register('confirmPassword')}
            />
          </div>
          <Button type="submit" active width="100%">
            Confirm
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default ResetPasswordPage
