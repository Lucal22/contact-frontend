import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com(\.br)*/,
      'nome invalido',
    )
    .min(3, 'O nome tem que ter no mínimo 3 caractéres')
    .max(15, 'O nome tem que ter no máximo 12 caractéres')

    .required(),
  phone: yup
    .string()
    .min(9, 'senha precisa ter entre 6 e 12 caractéres')
    .max(9, 'senha precisa ter entre 6 e 12 caractéres')
    .matches(/\D/, 'email invalido')
    .required(),
});

export default contactSchema;
