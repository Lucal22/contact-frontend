import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { api } from '../../../lib/api';
import * as Styled from '../styles';

export type FormLoginProps = {
  children: React.ReactNode;
};

export default function FormLogin() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: FieldValues) {
    console.log(data);
    // await api.post('/accounts', {
    //   email: formCreate.email,
    //   password: formCreate.password,
    // });
  }

  return (
    <Styled.Login>
      <h1>{'Login'}</h1>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormField>
          <Styled.Input
            {...register('LoginEmail')}
            type={'email'}
            placeholder={'email@email.com'}
          />
        </Styled.FormField>
        <Styled.FormField>
          <Styled.Input
            {...register('LoginPassword')}
            type={'password'}
            placeholder={'senha'}
          />
        </Styled.FormField>
        <Styled.Button type="submit" value={'ENTRAR'} />
      </Styled.Form>
    </Styled.Login>
  );
}
