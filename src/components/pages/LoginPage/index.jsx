import AuthLayout from '@layouts/Auth/index.jsx'
import AuthForm from '@common/AuthForm/index.jsx'
import InputBasic from '@common/Input/InputBasic/index.jsx'
import Button from '@common/Button/index.jsx'
import styles from './loginPage.module.scss'


const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthForm title="Login">
        <form className={styles.form} action="">
          <div className={styles.wrapperInput}>
            <InputBasic width="364px" name="email" id="email" label="Email" type="email" />
            <InputBasic width="364px" name="password" id="password" label="Password" type="password" />
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
