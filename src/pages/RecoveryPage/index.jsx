import AuthLayout from '@layouts/Auth/index.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import styles from './recoveryPage.module.scss'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import Button from '@common/Button/index.jsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RecoverySchema } from '@/validator/validationSchemas.js'
import useAuth from '@hooks/useAuth.jsx'

const RecoveryPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RecoverySchema),
  })
  const { recoverPassword } = useAuth()
  const onSubmit = async (data) => {
    try {
      await recoverPassword(data.email)
      navigate('/new-password')
    } catch (error) {
      console.error('Login error:', error)
    }
  }
  return (
    <AuthLayout>
      <AuthForm title="Password recovery">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic width="364px" id="email" name="email" label="Email" type="email" {...register('email')} />
          </div>
          <Button type="submit" active width="100%">
            Confirm
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}
export default RecoveryPage
