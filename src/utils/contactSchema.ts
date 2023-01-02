import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Z0-9.!#$%&’*+´/=?^_`{|}~-]*/, 'nome invalido')
    .min(3, 'O nome tem que ter no mínimo 3 caractéres')
    .max(15, 'O nome tem que ter no máximo 15 caractéres')

    .required(),
  phone: yup
    .string()
    .min(8, 'Número inválido')
    .max(12, 'O número precisa ter de 8 a 12 caractéres')
    .matches(/[0-9]/, 'O número do contato só pode ter números.')
    .required(),
});

export default contactSchema;
