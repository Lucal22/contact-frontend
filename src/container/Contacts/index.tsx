import { ReactNode, useState } from 'react';
import * as Styled from './styles';
import Container from '../../components/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import contactSchema from '../../utils/contactSchema';
import useAuth from '../../context/AuthProvider/useAuth';
import { IContacts } from '../../context/AuthProvider/interface';
import { contactCreate, contactRequest } from '../../utils/contactRequest';
import ContactsCard from './components/ContactsCard';

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
      await loadContacts();
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
    <Styled.Container>
      <Container height="100">
        {auth?.token ? (
          <>
            <Styled.Description>
              <h1>Contact List</h1>
              <p>
                Add, edit and delete contacts from your list. Input different
                informations to each contact so you dont send an important
                message to the wrong person.
              </p>
            </Styled.Description>
            <Styled.NewContact onSubmit={handleSubmit(addContact)}>
              <Styled.FormField>
                <input
                  {...register('name')}
                  type={'text'}
                  placeholder={'Ex: Luís Carlos'}
                />
                <p>{errors.name?.message as ReactNode}</p>
              </Styled.FormField>
              <Styled.FormField>
                <input
                  {...register('phone')}
                  type={'text'}
                  placeholder={'Ex: 021912345678'}
                />
                <p>{errors.phone?.message as ReactNode}</p>
              </Styled.FormField>

              <Styled.AddButton
                aria-label="Add contact"
                sending={sending}
                type="submit"
                disabled={sending}
                value={sending ? 'Loading' : 'Add'}
              />
            </Styled.NewContact>
            <Styled.ContactList>
              <Styled.LoadContacts onClick={() => loadContacts()}>
                Load Contacts
              </Styled.LoadContacts>
              <Styled.Contacts>
                {Object.entries(contacts).map((item) => {
                  return (
                    <ContactsCard
                      key={item[1].id}
                      id={item[1].id}
                      name={item[1].name}
                      phone={item[1].phone}
                      loadContacts={loadContacts}
                    />
                  );
                })}
              </Styled.Contacts>
            </Styled.ContactList>
          </>
        ) : (
          <p>You first need to login to see your contacts</p>
        )}
      </Container>
    </Styled.Container>
  );
}
