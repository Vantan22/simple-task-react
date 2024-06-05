import AuthLayout from '@layouts/Auth/index.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import styles from '@pages/LoginPage/loginPage.module.scss'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import Button from '@common/Button/index.jsx'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ConfirmationCodeSchema } from '@/validator/validationSchemas.js'
import { useNavigate } from 'react-router-dom'
import useAuth from '@hooks/useAuth.jsx'
import { getLocalStorage } from '@/containts/LocalStorage/index.js'

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ConfirmationCodeSchema),
  })
  const { confirmationCode } = useAuth()
  const email = getLocalStorage('email').replace(/"/g, '')

  const onSubmit = async (data) => {
    await confirmationCode({ email, ...data })
    navigate('/login')
  }
  return (
    <AuthLayout>
      <AuthForm title="Confirmation Code">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic
              width="364px"
              id="confirmationCode"
              name="confirmationCode"
              label="confirmationCode"
              type="text"
              {...register('confirmationCode')}
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

export default ConfirmationPage
