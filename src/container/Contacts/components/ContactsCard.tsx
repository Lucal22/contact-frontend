import * as Styled from '../styles';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import ContactsEdit from './ContactsEdit';
import { useState } from 'react';

export type ContactsCardProps = {
  id: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  loadContacts: () => void;
};

export default function ContactsCard({
  name,
  phone,
  id,
  loadContacts,
}: ContactsCardProps) {
  const [edit, setEdit] = useState(false);

  function openEdit() {
    setEdit(true);
  }
  function closeEdit() {
    setEdit(false);
  }
  return (
    <Styled.Card>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Phone>{phone}</Styled.Phone>
      <Styled.EditButton onClick={() => openEdit()}>
        <FiEdit size={25} />
      </Styled.EditButton>
      <Styled.DeleteButton>
        <FiTrash2 size={25} />
      </Styled.DeleteButton>
      {edit ? (
        <ContactsEdit
          loadContacts={loadContacts}
          cancel={closeEdit}
          id={id}
          name={name}
          phone={phone}
        />
      ) : null}
    </Styled.Card>
  );
}
