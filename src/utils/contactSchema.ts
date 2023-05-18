import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Z0-9.!#$%&’*+´/=?^_`{|}~-]*/, 'Invalid name')
    .min(3, 'Name require a minimum of 3 characters')
    .max(15, 'Name require a maximum of 15 characters')

    .required(),
  phone: yup
    .string()
    .min(8, 'Invalid number')
    .max(12, 'Number require 8 to 12 characters')
    .matches(/[0-9]/, 'You can only add numbers.')
    .required(),
});

export default contactSchema;
