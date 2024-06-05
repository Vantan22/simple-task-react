import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email not valid').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const registerSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Email not valid').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const ConfirmationCodeSchema = yup.object().shape({
  confirmationCode: yup
    .string()
    .required('Confirmation code is required')
    .min(6, 'Confirmation code must be at least 6 characters')
    .max(6, 'Confirmation code must be at most 6 characters'),
})

export const RecoverySchema = yup.object().shape({
  email: yup.string().email('Email not valid').required('Email is required'),
})

export const NewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be at most 50 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})
