import React, { useState } from 'react';
import * as Styled from './styles';
import ProtectedLayout from '../../components/ProtectedLayout';
import Container from '../../components/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import contactSchema from '../../utils/contactSchema';
import useAuth from '../../context/AuthProvider/useAuth';
import { IContacts } from '../../context/AuthProvider/interface';
import { contactCreate, contactRequest } from '../../utils/contactRequest';

export default function Contacts() {
  const auth = useAuth();
  const [contacts, setContacts] = useState<[IContacts] | []>([]);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  async function addContact(data: FieldValues) {
    setSending(true);
    try {
      await contactCreate(auth?.email, data.name, data.phone);
      setContacts((prevContacts) => {
        return { ...prevContacts, data };
      });
      setSending(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadContacts() {
    const contacts = await contactRequest(auth?.email);
    setContacts(contacts);
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
              placeholder={'Ex: 021912345678'}
            />
            <p>{errors.phone?.message}</p>
            <Styled.AddButton
              sending={sending}
              type="submit"
              disabled={sending}
              value={sending ? 'Aguarde' : 'Adicionar'}
            />
          </Styled.NewContact>
          <button onClick={() => loadContacts()}>Carregar contatos</button>
          {Object.entries(contacts).map((item) => {
            return <p key={item[1].name}>{item[1].name}</p>;
          })}
        </Container>
      </Styled.Container>
    </ProtectedLayout>
  );
}
