import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com(\.br)*/)
    .required(),
  password: yup.string().min(6).max(12).required(),
});

export default RegisterSchema;
