import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(
      /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com(\.br)*/,
      'Invalid email',
    )
    .required(),
  password: yup
    .string()
    .min(6, 'Password requires 6 to 12 characters')
    .max(12, 'Password requires 6 to 12 characters')
    .required(),
});

export default formSchema;
