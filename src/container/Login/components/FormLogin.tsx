import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import formSchema from '../../../utils/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from '../styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../context/AuthProvider/useAuth';

export type FormLoginProps = {
  children: React.ReactNode;
};

export default function FormLogin() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [noUser, setNoUser] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    try {
      await auth?.authenticate(data.email, data.password);
      navigate('/contacts');
    } catch (e) {
      console.log('erro');
    }
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
