import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from '../../../utils/formSchema';
import * as Styled from '../styles';
import { registerRequest, verifyEmail } from '../../../utils/registerRequest';

export type FormRegisterProps = {
  children: React.ReactNode;
};

export default function FormRegister() {
  const [used, setUsed] = useState(false);
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    setSubmit(true);
    const checkEmail = await verifyEmail(data.email);
    if (checkEmail) {
      setUsed(true);
      setSubmit(false);
      return;
    }
    await registerRequest(data.email, data.password);
    setSubmit(false);
    alert('Conta criada com sucesso');
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
        <Styled.Button
          aria-label="Criar conta"
          creating={submit}
          disabled={submit}
          type="submit"
          value={submit ? 'AGUARDE' : 'CRIAR CONTA'}
        />
      </Styled.Form>
    </Styled.CreateAccount>
  );
}
