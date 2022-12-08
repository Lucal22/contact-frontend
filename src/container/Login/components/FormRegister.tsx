import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../lib/api';
import RegisterSchema from '../../../utils/registerSchema';
import * as Styled from '../styles';

export type FormRegisterProps = {
  children: React.ReactNode;
};

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);
    // await api.post('/accounts', {
    //   email: formCreate.email,
    //   password: formCreate.password,
    // });
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
          <span>{errors.email?.message}</span>
        </Styled.FormField>
        <Styled.FormField>
          <Styled.Input
            {...register('password')}
            type={'password'}
            placeholder={'senha'}
          />
          <span>{errors.password?.message}</span>
        </Styled.FormField>
        <Styled.Button type="submit" value={'CRIAR CONTA'} />
      </Styled.Form>
    </Styled.CreateAccount>
  );
}
