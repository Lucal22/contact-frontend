import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../lib/api';
import formSchema from '../../../utils/formSchema';
import * as Styled from '../styles';

export type FormRegisterProps = {
  children: React.ReactNode;
};

const emailTest = [
  'email@email.com',
  'lucal@gmail.com',
  'lucal22@gmail.com',
  'lucal222@gmail.com',
  'lucalgamer@gmail.com',
];

export default function FormRegister() {
  const [used, setUsed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    if (emailTest.find((e) => e === data.email)) {
      return setUsed(true);
    } else {
      setUsed(false);
      // await api.post('/accounts', {
      //   email: data.email,
      //   password: data.password,
      // });
      console.log('Dados enviados com sucesso');
    }
  }
  return (
    <Styled.CreateAccount>
      <h1>{'Criar conta'}</h1>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormField>
          <Styled.Input
            {...register('email')}
            type={'email'}
            placeholder={'email@email.com'}
          />
          <p>
            {errors.email?.message}
            {used ? 'Email informado já foi utilizado' : null}
          </p>
        </Styled.FormField>
        <Styled.FormField>
          <Styled.Input
            {...register('password')}
            type={'password'}
            placeholder={'senha'}
          />
          <p>{errors.password?.message}</p>
        </Styled.FormField>
        <Styled.Button type="submit" value={'CRIAR CONTA'} />
      </Styled.Form>
    </Styled.CreateAccount>
  );
}
