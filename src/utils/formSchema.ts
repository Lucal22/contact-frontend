import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('email invalido')
    .matches(
      /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com(\.br)*/,
      'email invalido',
    )
    .required(),
  password: yup
    .string()
    .min(6, 'senha precisa ter entre 6 e 12 caractéres')
    .max(12, 'senha precisa ter entre 6 e 12 caractéres')
    .required(),
});

export default formSchema;
