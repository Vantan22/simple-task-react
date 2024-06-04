import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().required('Password là bắt buộc'),
});
