import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import ProtectedLayout from '../../components/ProtectedLayout';
import Container from '../../components/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import contactSchema from '../../utils/contactSchema';
import { api } from '../../lib/api';
import useAuth from '../../context/AuthProvider/useAuth';

export type ContactsProps = {
  children: React.ReactNode;
};

export default function Contacts() {
  const [sending, setSending] = useState(false);
  const auth = useAuth();
  console.log(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  async function addContact(data: FieldValues) {
    console.log('cheguei aqui');
    setSending(true);
    try {
      await api.post('/login/contacts/create', {
        email: auth?.email,
        name: data.name,
        phone: data.phone,
      });
      setSending(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <ProtectedLayout>
      <Styled.Container>
        <Container height="full">
          <Styled.Description>
            <h1>LISTA DE CONTATOS</h1>
            <p>
              Adicione, edite e exclua contatos da sua agenda. Utilize nomes e
              números diferentes para não acabar enviando aquela mensagem para o
              contatinho errado.
            </p>
          </Styled.Description>
          <Styled.NewContact onSubmit={handleSubmit(addContact)}>
            <input
              {...register('name')}
              type={'text'}
              placeholder={'Ex: Luís Carlos'}
            />
            <p>{errors.name?.message}</p>
            <input
              {...register('phone')}
              type={'text'}
              placeholder={'Ex: 912345678'}
            />
            <p>{errors.phone?.message}</p>
            <Styled.AddButton
              sending={sending}
              type="submit"
              disabled={sending}
              value={sending ? 'Aguarde' : 'Adicionar'}
            />
          </Styled.NewContact>
        </Container>
      </Styled.Container>
    </ProtectedLayout>
  );
}
