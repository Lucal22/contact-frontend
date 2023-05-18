import { ReactNode, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import formSchema from '../../../utils/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from '../styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../context/AuthProvider/useAuth';

export default function FormLogin() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    setIsSending(true);
    try {
      await auth?.authenticate(data.email, data.password);
      setIsSending(false);
      navigate('/login/contacts');
    } catch (e) {
      setFormData(true);
      console.log(e);
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
          <p>{errors.email?.message as ReactNode}</p>
          <p> {formData ? '  Incorrect email or password' : null}</p>
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
          aria-label="Login"
          creating={isSending}
          type="submit"
          value={'LOGIN'}
        />
      </Styled.Form>
    </Styled.Login>
  );
}
