import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '@layouts/Auth/index.jsx'
import useAuth from '@hooks/useAuth.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import Button from '@common/Button/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import { getLocalStorage } from '@/contains/LocalStorage/index.js'
import { NewPasswordSchema } from '@/validator/validationSchemas.js'
import styles from './newPassword.module.scss'

const NewPasswordPage = () => {
  const [code, setCode] = useState('')
  const [isCodeValid, setIsCodeValid] = useState(null)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewPasswordSchema),
  })
  const email = getLocalStorage('email')
  const resetCode = getLocalStorage('resetCode')
  const { checkResetCode, newPassword } = useAuth()

  const onSubmit = async (data) => {
    const status = await newPassword(email, code, data.password)

    if (status === 200) {
      navigate('/login')
    }
    if (status === 410) {
      setIsCodeValid(false)
      alert('Reset code expired!')
    }
  }

  useEffect(() => {
    const checkCode = async () => {
      if (code.length === 6) {
        try {
          const response = await checkResetCode(email, code)
          if (response === 200) {
            console.log('1')
            setIsCodeValid(true)
          } else {
            setIsCodeValid(false)
          }
        } catch (error) {
          setIsCodeValid(false)
          console.error('Error checking code:', error)
        }
      } else {
        setIsCodeValid(null)
      }
    }

    checkCode()
  }, [code, isCodeValid])
  return (
    <AuthLayout>
      <AuthForm title="New Password">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperInput}>
            <InputBasic
              width="364px"
              id="resetCode"
              name="resetCode"
              label="resetCode"
              type="resetCode"
              status={isCodeValid}
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <InputBasic
              width="364px"
              id="password"
              name="password"
              label="Password"
              type="password"
              {...register('password')}
            />
            <InputBasic
              width="364px"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
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

export default NewPasswordPage
