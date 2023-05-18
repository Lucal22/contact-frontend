import React, { ReactNode, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from '../../../utils/formSchema';
import * as Styled from '../styles';
import { registerRequest, verifyEmail } from '../../../utils/registerRequest';

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
    alert('Account created');
  }

  return (
    <Styled.CreateAccount>
      <h1>{'Create account'}</h1>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormField>
          <Styled.Input
            {...register('email')}
            type={'email'}
            placeholder={'email@email.com'}
          />
          <p>{errors.email?.message as ReactNode}</p>
          <p> {used ? 'Email already being used.' : null}</p>
        </Styled.FormField>
        <Styled.FormField>
          <Styled.Input
            {...register('password')}
            type={'password'}
            placeholder={'password'}
          />
          <p>{errors.password?.message as ReactNode}</p>
        </Styled.FormField>
        <Styled.Button
          aria-label="Create account"
          creating={submit}
          disabled={submit}
          type="submit"
          value={submit ? 'Loading' : 'CREATE ACCOUNT'}
        />
      </Styled.Form>
    </Styled.CreateAccount>
  );
}
