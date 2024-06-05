import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { NewPasswordSchema } from '@/validator/validationSchemas.js'
import useAuth from '@hooks/useAuth.jsx'
import AuthLayout from '@layouts/Auth/index.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import styles from './newPassword.module.scss'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import Button from '@common/Button/index.jsx'
import { getLocalStorage } from '@/containts/LocalStorage/index.js'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const email = getLocalStorage('email')?.replace(/"/g, '')
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
  }, [code,isCodeValid])
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
