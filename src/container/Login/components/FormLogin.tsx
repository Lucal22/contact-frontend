import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import formSchema from '../../../utils/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from '../styles';
import loginRequest from '../../../utils/loginRequest';

export type FormLoginProps = {
  children: React.ReactNode;
};

export default function FormLogin() {
  const [noUser, setNoUser] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    const user = await loginRequest(data.email, data.password);
    user ? console.log(user) : console.log('user vazio');
    // if (emailTest.find((e) => e === data.email)) {
    //    return emailTest.filter((e) => e === data.email);
    //   console.log(data.email);
    // } else {
    //   return setNoUser(true);
    // }
  }

  return (
    <Styled.Login>
      <h1>{'Login'}</h1>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormField>
          <Styled.Input
            {...register('email')}
            type={'email'}
            placeholder={'email@email.com'}
          />
          <p>
            {errors.email?.message}
            {noUser ? 'email ou senha incorretos' : null}
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
        <Styled.Button type="submit" value={'ENTRAR'} />
      </Styled.Form>
    </Styled.Login>
  );
}
